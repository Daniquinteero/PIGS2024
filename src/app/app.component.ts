import { Component } from '@angular/core';
import {RouterOutlet, ɵEmptyOutletComponent} from '@angular/router';
import {MainPageComponent} from "./pages/principal/main-page/main-page.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ɵEmptyOutletComponent, MainPageComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PIGS2024';
}
