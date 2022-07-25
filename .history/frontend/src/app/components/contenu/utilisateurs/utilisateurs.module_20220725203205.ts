import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateursComponent } from './utilisateurs.component';



@NgModule({
  declarations: [
    UtilisateursComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleComponent,
  ]
})
export class UtilisateursModule { }