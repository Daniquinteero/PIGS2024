import {Component, Input} from '@angular/core';
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent {

  @Input() product: any;
  @Input() chartID: any;
  jsonData: any;


  public chart: any;

  ngAfterViewInit(): void {
    this.jsonData = JSON.parse(this.product);

    this.createChart();

  }

  createChart(){

    this.chart = new Chart(this.chartID, {
      type: 'line',

      data: {// values on X-Axis
        labels: this.jsonData['dates'],
        datasets: [
          {
            label: "Number of searches",
            data: this.jsonData['searchs'],
            borderColor: 'blue'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          }
        },
        plugins: {
          legend: {
            display: false // Hide legend
          }
        }
      }
    });
  }

}
