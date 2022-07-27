import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-equipe',
  templateUrl: './edit-equipe.component.html',
  styleUrls: ['./edit-equipe.component.css']
})
export class EditEquipeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  save() {

  }

  back() {
    this.router.navigate(['/equipes']);
  }

}
