import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartData } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {
  @Input('title') title: string = "Sin título";
  @Input('labels') labels: Array<string> = [];
  @Input('data') data: Array<number> = [1,1,20];
  public doughnutChartData!: ChartData<'doughnut'>;


  ngOnInit(): void {
      this.doughnutChartData = {
        labels: this.labels,
        datasets: [
          { data: this.data },
        ]
      };
  }

  // Doughnut

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
