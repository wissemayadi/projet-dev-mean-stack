import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEquipeComponent } from './pages/show-equipe/show-equipe.component';
import {EquipeRoutingModule} from "./equipe-module.routing";
import {ReactiveFormsModule} from "@angular/forms";
import { EquipeListComponent } from './components/equipe-list/equipe-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MemberModule} from "../member/member.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateEquipeComponent } from './pages/create-equipe/create-equipe.component';
import { EditEquipeComponent } from './pages/edit-equipe/edit-equipe.component';
import { EquipeFormComponent } from './components/equipe-form/equipe-form.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { EquipeMemberListComponent } from './components/equipe-member-list/equipe-member-list.component';
import {MatSortModule} from "@angular/material/sort";


@NgModule({
    declarations: [ShowEquipeComponent, EquipeListComponent, CreateEquipeComponent, EditEquipeComponent, EquipeFormComponent, EquipeMemberListComponent],
    exports: [
        EquipeListComponent
    ],
    imports: [
        CommonModule,
        EquipeRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MemberModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatSortModule
    ]
})
export class EquipesModule { }
