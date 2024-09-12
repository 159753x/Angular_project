import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Employee } from './employee';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAcessService {
  
  readonly apiUrl = `https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==`
  public employees: Employee[] = [];
  public tasks: Task[] = [];
  public generatedData: boolean = false;
  
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    if(this.generatedData){
      return of(this.tasks)
    }
    return this.http.get<Task[]>(this.apiUrl).pipe(tap((res:Task[])=>{

      this.tasks = res
      const employeeMap:Map<string, Employee> = new Map()

      res.forEach((task)=>{
        if (!task.EmployeeName){
          return
        }
        if(task.DeletedOn && new Date(task.DeletedOn) < new Date()){
          return
        }
        // console.log(task);
        // console.log(new Date(task.EndTimeUtc).getTime());
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
      this.generatedData = true;
    }))
  }
  
}
