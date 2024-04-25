import { Component } from '@angular/core';
import {ProductSectionComponent} from "./product-section/product-section.component";
import {ActivatorComponentsService} from "../../../Services/activator-components.service";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ProductSectionComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
}
