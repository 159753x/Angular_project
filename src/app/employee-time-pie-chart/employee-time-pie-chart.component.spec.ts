import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimePieChartComponent } from './employee-time-pie-chart.component';

describe('EmployeeTimePieChartComponent', () => {
  let component: EmployeeTimePieChartComponent;
  let fixture: ComponentFixture<EmployeeTimePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeTimePieChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTimePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
