import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimeComponent } from './employee-time/employee-time.component';
import { EmployeeTimePieChartComponent } from './employee-time-pie-chart/employee-time-pie-chart.component';

const routes: Routes = [{path: 'employee', component: EmployeeTimeComponent}, {path: 'pie-chart', component: EmployeeTimePieChartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
