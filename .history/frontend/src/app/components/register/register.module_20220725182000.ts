import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
Regi
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { 
  
}