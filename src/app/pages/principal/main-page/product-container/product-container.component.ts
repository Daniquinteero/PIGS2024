import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../Services/product.service";

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls:['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  products: any;
  jsonData: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.getAllProducts();

  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(data)
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  totalNumberOfSearches(input: any){
    this.jsonData = JSON.parse(input);
    let sum: number = 0;
    for (let i = 0; i < this.jsonData['searchs'].length; i++) {
      sum += this.jsonData['searchs'][i];
    }
    return sum.toString();
  }

}
