import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditMemberComponent} from './pages/edit-member/edit-member.component';
import {CreateMemberComponent} from './pages/create-member/create-member.component';
import {ListMembersComponent} from './pages/list-members/list-members.component';

const routes: Routes = [

   {
    path: '',
    component: ListMembersComponent
  },
  {
    path: 'add',
    component: CreateMemberComponent
  },
  {
    path: 'edit/:playerId',
    component: EditMemberComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule {
}
