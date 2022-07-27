import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subject} from "rxjs";
import {Team} from "../../../_models/Team";
import {takeUntil} from "rxjs/operators";
import {TeamsService} from "../../../_services/teams.service";
import {PlayerServiceHttp} from "../../../_services/player.service";



@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'numberOfMembers', 'maxSize' ,'actions'];

  dataSource!: MatTableDataSource<Team>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private unsubscribe$ = new Subject<void>();
  display= false;
  constructor(private router: Router, private  teamService: TeamsService ,
              private readonly  playerService: PlayerServiceHttp) { }

  ngOnInit(): void {
    this.loadSquads()
  }
  addNewTeam() {
    this.router.navigate(['/equipes', 'add']);
  }
  loadSquads() {
    this.teamService.getAllTeams().pipe(takeUntil(this.unsubscribe$)).subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<Team>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  editTeam(element:any) {
    this.router.navigate(['/equipes', 'edit', element._id]);
  }
  removeTeam(element:any) {
    this.teamService.remove(element._id).pipe(takeUntil(this.unsubscribe$)).subscribe(
      (rep) => {
        this.dataSource.data.splice(this.dataSource.data.indexOf(element), 1);
        this.dataSource._updateChangeSubscription();
      }
    );
  }

}
