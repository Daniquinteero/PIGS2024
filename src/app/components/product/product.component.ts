import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  public chart: any;
  jsonData: any;
  totalSearches: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.searchProduct(id);
      this.createChart();
    });

  }

  searchProduct(id: string) {
    this.productService.searchProduct(id).subscribe(
      (data) => {
        this.product = data;
        console.log(data)
        this.jsonData = JSON.parse(this.product['searchs']);

        this.totalNumberOfSearches();
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
    
  totalNumberOfSearches(){
    let sum: number = 0;
    for (let i = 0; i < this.jsonData['searchs'].length; i++) {
      sum += this.jsonData['searchs'][i];
    }
    this.totalSearches = sum;
  }
}
