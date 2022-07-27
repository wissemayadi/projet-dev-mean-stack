import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './components/guards/auth.guard';
import { UtilisateursComponent } from './components/contenu/utilisateurs/utilisateurs.component';
import { ChampionnatComponent } from './components/contenu/championnat/championnat.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpRequestInterceptor} from "./interceptors/http-request.interceptor";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [



                {
                    path: '',
                    component: AppLayoutComponent,

                    children: [
                        {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
                        {path:'contenu/utilisateurs', component:UtilisateursComponent, canActivate: [AuthGuard]},
                        {path:'contenu/championnat', component:ChampionnatComponent, canActivate: [AuthGuard]},

                        // { path: '', component: LoginComponent },
                        {path:'',pathMatch:'full',redirectTo:'login'},
                        {path:'register',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                        {
                            path: 'contenu',

                            loadChildren: () =>
                                import(
                                    './components/contenu/contenu.module'
                                ).then((m) => m.ContenuModule),
                        },
                        {
                            path: 'equipes',
                            loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule),

                        },
                        {
                            path: 'players',
                            loadChildren: () => import('./member/member.module').then(m => m.MemberModule)
                        }



                    ],

                },

                {
                    path: '**',
                    component: NotfoundComponent,
                },

            ],
            { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }
        ),
    ],
    exports: [RouterModule],
    providers: [{provide: HTTP_INTERCEPTORS,useClass:HttpRequestInterceptor, multi:true}],
})
export class AppRoutingModule {}
