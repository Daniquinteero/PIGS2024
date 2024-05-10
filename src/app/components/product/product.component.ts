import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  jsonData: any;
  totalSearches: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.searchProduct(id);
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

  totalNumberOfSearches(){
    let sum: number = 0;
    for (let i = 0; i < this.jsonData['searchs'].length; i++) {
      sum += this.jsonData['searchs'][i];
    }
    this.totalSearches = sum;
  }
}
