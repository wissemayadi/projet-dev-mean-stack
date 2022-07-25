import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
  ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class LoginModule { }
