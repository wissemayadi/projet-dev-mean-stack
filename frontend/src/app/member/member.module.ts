import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberRoutingModule} from './member-routing.module';
import {CreateMemberComponent} from './pages/create-member/create-member.component';
import {EditMemberComponent} from './pages/edit-member/edit-member.component';
import {ListMembersComponent} from './pages/list-members/list-members.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MemberListComponent} from './component/member-list/member-list.component';
import {MemberFormComponent} from './component/member-form/member-form.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    CreateMemberComponent, EditMemberComponent,
    ListMembersComponent ,MemberListComponent, MemberFormComponent,
  ],
  exports: [
    MemberListComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSortModule

  ]
})
export class MemberModule {

}
