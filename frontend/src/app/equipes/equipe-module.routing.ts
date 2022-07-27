import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowEquipeComponent} from "./pages/show-equipe/show-equipe.component";
import {CreateMemberComponent} from "../member/pages/create-member/create-member.component";
import {EditMemberComponent} from "../member/pages/edit-member/edit-member.component";
import {EditEquipeComponent} from "./pages/edit-equipe/edit-equipe.component";
import {CreateEquipeComponent} from "./pages/create-equipe/create-equipe.component";

const routes: Routes = [
  {
    path: '',
    component: ShowEquipeComponent
  },
  {
    path: 'add',
    component: CreateEquipeComponent
  },
  {
    path: 'edit/:teamId',
    component: EditEquipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
