import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenuRoutingModule } from './contenu-routing.module';
import { ContenuComponent } from './contenu.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReservationsComponent } from './reservations/reservations.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ChampionnatComponent } from './championnat/championnat.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ChartModule } from 'primeng/chart';
import { ArbitreComponent } from './arbitre/arbitre.component';
import { CentresComponent } from './centres/centres.component';
import { TerrainsComponent } from './terrains/terrains.component';
import {EquipesModule} from "../../equipes/equipes.module";


@NgModule({
    declarations: [
        ContenuComponent,
        UtilisateursComponent,
        TerrainsComponent,
        ReservationsComponent,
        EquipesComponent,
        ChampionnatComponent,
        ArbitreComponent,
        CentresComponent
    ],
    imports: [
        CommonModule,
        ContenuRoutingModule,
        CommonModule,
        FormsModule,
        TableModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
        ToolbarModule,
        DialogModule,
        ReactiveFormsModule,
        ConfirmDialogModule,
        ChartModule,
        EquipesModule
    ],
})
export class ContenuModule {}
