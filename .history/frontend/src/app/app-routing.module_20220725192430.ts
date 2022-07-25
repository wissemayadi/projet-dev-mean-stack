import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './components/guards/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                   
                    children: [
                        {path:'dashboard', component:DashboardComponent},
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
                    ],
                    children2: [
                        {path:'dashboard', component:DashboardComponent},
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
})
export class AppRoutingModule {}
