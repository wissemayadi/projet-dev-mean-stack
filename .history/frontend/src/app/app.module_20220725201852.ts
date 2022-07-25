import { NgModule } from '@angular/core';

import {
    CommonModule,
    HashLocationStrategy,
    LocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { LoginModule } from './components/login/login.module';
import { RegisterComponent } from './components/register/register.component';
import { RegisterModule } from './components/register/register.module';
import { AuthGuard } from './components/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UtilisateursModule } from './components/contenu/utilisateurs/utilisateurs.module';

@NgModule({
    declarations: [AppComponent, NotfoundComponent, DashboardComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        LoginModule,
        ReactiveFormsModule,
        RegisterModule,
       
        HttpClientModule,
        BrowserModule
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
