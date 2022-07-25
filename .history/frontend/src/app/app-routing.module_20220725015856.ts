import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {LoginComponent} from "./components/login/login.component";
import {TerrainsComponent} from "./components/contenu/terrains/terrains.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        { path: '', component: LoginComponent  },
                        {path:'dashboard',component:DashboardComponent},

                        {
                            path: 'contenu',
                            loadChildren: () =>
                                import(
                                    './components/contenu/contenu.module'
                                ).then((m) => m.ContenuModule),
                        },
                    ],
                },
                {path:'',pathMatch}

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
