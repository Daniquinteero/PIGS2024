import { Component } from '@angular/core';
import {ProductContainerComponent} from "../product-container/product-container.component";

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [
    ProductContainerComponent
  ],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {

}
