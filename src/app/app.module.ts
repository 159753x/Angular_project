import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTimeComponent } from './employee-time/employee-time.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { EmployeeTimePieChartComponent } from './employee-time-pie-chart/employee-time-pie-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeTimeComponent,
    NavigationMenuComponent,
    EmployeeTimePieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
