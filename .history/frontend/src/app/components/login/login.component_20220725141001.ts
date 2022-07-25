import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['   styles: [`
  :host ::ng-deep .p-password input {
      width: 100%;
      padding:1rem;
  }
  :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
  }
  :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
  }
`]']
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];

    password!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
