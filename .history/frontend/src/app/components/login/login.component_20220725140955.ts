import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];

    password!: string;
  constructor() { }

  ngOnInit(): void {
  }

}