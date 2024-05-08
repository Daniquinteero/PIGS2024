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
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
