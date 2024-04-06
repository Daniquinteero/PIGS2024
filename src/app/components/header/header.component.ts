import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, ROUTES} from "@angular/router";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
