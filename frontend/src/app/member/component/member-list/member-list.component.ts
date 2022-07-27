import {Component, EventEmitter, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatTableDataSource} from "@angular/material/table";
import {Player} from "../../../_models/Player";
import { PlayerServiceHttp} from "../../../_services/player.service";
import {TeamsService} from "../../../_services/teams.service";


@Component({
  selector: 'app-member-list',
  templateUrl: 'member-list.component.html',
  styleUrls: ['member-list.component.scss']
})
export class MemberListComponent  implements OnInit, OnDestroy {
  displayedColumns: string[] = [ 'firstName', 'lastName', 'age','equipe', 'actions'];

  dataSource!: MatTableDataSource<Player>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly  memberService: PlayerServiceHttp,
              private readonly  teamService: TeamsService,
             private router: Router) {
    this.loadMembers();
  }

  ngOnInit() {
    this.loadMembers()
  }

  loadMembers() {
    this.memberService.getAllPlayers().pipe(takeUntil(this.unsubscribe$)).subscribe(
      (players) => {
        players.forEach(player => {
          this.teamService.getOneById(player.squad).pipe(takeUntil(this.unsubscribe$)).subscribe(
            (team)=> {
              player.squad = team
            }
          )

        })

        console.log(players)
        this.dataSource = new MatTableDataSource<Player>(players);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  removeMember(member: Player) {
    this.memberService.remove(member._id).pipe(takeUntil(this.unsubscribe$)).subscribe(
      (rep) => {
        this.dataSource.data.splice(this.dataSource.data.indexOf(member), 1);
        this.dataSource._updateChangeSubscription();
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  editMember(row: Player) {
    this.router.navigate(['/players', 'edit', row._id]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue.length > 2 || filterValue.length == 0){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}




