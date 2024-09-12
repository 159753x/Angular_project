import { AfterViewInit, Component, OnInit, ElementRef} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataAcessService } from '../data-access/data-acess.service';
import { Employee } from '../data-access/employee';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-employee-time-pie-chart',
  templateUrl: './employee-time-pie-chart.component.html',
  styleUrl: './employee-time-pie-chart.component.scss'
})
export class EmployeeTimePieChartComponent implements AfterViewInit{
  public employees: Employee[] = []
  constructor(private dataAccessService: DataAcessService){

  }
  ngAfterViewInit(): void {
    this.dataAccessService.getTasks().subscribe((res)=>{
      this.employees = this.dataAccessService.employees
      // console.log(this.dataAccessService.employees);
      // console.log(this.employees);
      this.createPieChart();
    })
  }

  
  createPieChart() {

    // const backgroundColors = this.getRandomColors(3);
    
    const employees = {
      labels: this.employees.map(e=>e.EmployeeName),
      datasets: [
        {
          data: this.employees.map(e=>this.convertToHours(e.TimeWorked)),
          backgroundColor: this.getRandomColors(this.employees.length),
        }
      ]
    };

    const canvas = document.getElementById('pieCanvas') as HTMLCanvasElement;
    Chart.register(ChartDataLabels);

    new Chart(canvas, {
      type: 'pie',
      data: employees,
      options: {
        plugins: {
          legend: {
            labels:{font:{size:20}}
          },
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data as number[]
              dataArr.forEach(data => {
                sum += data;
              });
              let percentage = (value * 100 / sum).toFixed(2) + "%";
              return percentage;
            },
            color: '#fff',
            font: {size: 20, family: 'Roboto'},
            backgroundColor: '#555'
          }
        }
      }
    });
  }

  getRandomColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }
    return colors;
  }

  convertToHours(ms:number){
    return Math.round(ms/(1000*60*60))
  }
}
