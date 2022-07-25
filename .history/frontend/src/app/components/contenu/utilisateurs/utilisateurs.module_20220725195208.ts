import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../guards/auth.guard';
import { UtilisateursComponent } from './utilisateurs.component';



@NgModule({
  declarations: [UtilisateursComponent],
  imports: [
    CommonModule
  ]
})
export class UtilisateursModule { }