import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-equipe',
  templateUrl: './show-equipe.component.html',
  styleUrls: ['./show-equipe.component.css']
})
export class ShowEquipeComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router) {
  }

  ngOnInit() {

  }

  addNewSquad() {
    this.router.navigate(['/equipes', 'add']);
  }

}
