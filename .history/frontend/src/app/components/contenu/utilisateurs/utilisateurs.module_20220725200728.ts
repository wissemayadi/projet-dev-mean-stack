import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../guards/auth.guard';
import { UtilisateursComponent } from './utilisateurs.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UtilisateursComponent],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  providers:[]
})
export class UtilisateursModule { }
