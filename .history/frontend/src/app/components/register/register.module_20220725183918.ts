import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from './register.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    RegisterComponent
    ],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
                    <div><a  [routerLink]="['/register']" class=" font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">create account?</a>

  
  ]
})
export class RegisterModule { 
  
}
