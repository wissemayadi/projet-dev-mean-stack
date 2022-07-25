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
import {Register}
@NgModule({
    declarations: [AppComponent, NotfoundComponent, DashboardComponent, RegisterComponent],
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
        
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
