import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class DataAcessService {
  
  readonly apiUrl = `https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==`
  constructor(private http:HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
