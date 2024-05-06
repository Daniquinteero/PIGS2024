import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  searchProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.productService.searchProducts(this.searchTerm)
        .subscribe((data: any) => {
          this.router.navigate(['/result'], { state: { data: data } });
          console.log(data);
        });
    }
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchProducts();
    }
  }
}
