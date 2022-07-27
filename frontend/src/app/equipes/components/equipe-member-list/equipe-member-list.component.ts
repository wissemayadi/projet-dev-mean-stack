import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {TeamsService} from "../../../_services/teams.service";
import {PlayerServiceHttp} from "../../../_services/player.service";
import {takeUntil} from "rxjs/operators";
import {Player} from "../../../_models/Player";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-equipe-member-list',
  templateUrl: './equipe-member-list.component.html',
  styleUrls: ['./equipe-member-list.component.css']
})
export class EquipeMemberListComponent implements OnInit {

  displayedColumns: string[] = [ 'firstName', 'lastName', 'age'];

  dataSource!: MatTableDataSource<Player>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() squadId?: number   ;
  @ViewChild('content') content!: ElementRef;
  private unsubscribe$ = new Subject<void>();
  display= false;
  constructor(private router: Router, private  teamService: TeamsService ,
              private readonly  memberService: PlayerServiceHttp) { }

  ngOnInit(): void {

    this.loadMembers()
  }

  loadMembers() {
    this.memberService.getBySquadId(this.squadId ? this.squadId :-1).pipe(takeUntil(this.unsubscribe$)).subscribe(
      (players) => {
        if(!players){
          return;
        }
        this.dataSource = new MatTableDataSource<Player>(players);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  openPDF() {
    const doc = new jsPDF();
    autoTable(doc, { html: '#member_table' })

    doc.save('my_table.pdf')


  }
}
