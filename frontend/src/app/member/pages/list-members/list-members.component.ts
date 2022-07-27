import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: 'list-members.component.html',
  styleUrls: ['list-members.component.scss']
})
export class ListMembersComponent  implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  addNewMember() {
    this.router.navigate(['/players', 'add']);
  }
}




