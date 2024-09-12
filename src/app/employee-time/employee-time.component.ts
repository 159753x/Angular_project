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
    this.dataAccessService.getTasks().subscribe((res:Task[])=>{
      const employeeMap:Map<string, Employee> = new Map()

      res.forEach((task)=>{
        if (!task.EmployeeName){
          return
        }
        if(task.DeletedOn && new Date(task.DeletedOn) < new Date()){
          return
        }
        console.log(task);
        console.log(new Date(task.EndTimeUtc).getTime());
        const timeDiff = Math.floor((new Date(task.EndTimeUtc).getTime() -  new Date(task.StarTimeUtc).getTime()))
        if (employeeMap.has(task.EmployeeName)){
          employeeMap.get(task.EmployeeName)!.TimeWorked += timeDiff
        }
        else{
          employeeMap.set(task.EmployeeName, {EmployeeName: task.EmployeeName, TimeWorked: timeDiff})
        }
      })
      this.employees = [...employeeMap.values()].sort((a,b)=>{
        return a.TimeWorked>b.TimeWorked ? -1:1
      })
      console.log(this.employees);
    })
  }
  constructor(private dataAccessService:DataAcessService){

  }

  convertToHours(ms:number){
    return Math.round(ms/(1000*60*60))
  }
}
