import { Component, OnInit } from '@angular/core';
import { DataAcessService } from '../data-access/data-acess.service';
import { Task } from '../data-access/task';
import { Employee } from '../data-access/employee';

@Component({
  selector: 'app-employee-time',
  templateUrl: './employee-time.component.html',
  styleUrl: './employee-time.component.scss'
})
export class EmployeeTimeComponent implements OnInit{
  employees:Employee[] = []
  ngOnInit(): void {
    
    this.dataAccessService.getTasks().subscribe((res)=>{
      this.employees = this.dataAccessService.employees
      // console.log(this.dataAccessService.employees);
      // console.log(this.employees);
    })
  }
  constructor(private dataAccessService:DataAcessService){}
  

  convertToHours(ms:number){
    return Math.round(ms/(1000*60*60))
  }
}
