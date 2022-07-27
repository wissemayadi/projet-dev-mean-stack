import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'edit-member.component.html',
  styleUrls: ['edit-member.component.scss']
})
export class EditMemberComponent  implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  save() {
  }

  back() {
    this.router.navigate(['/players']);
  }
}
