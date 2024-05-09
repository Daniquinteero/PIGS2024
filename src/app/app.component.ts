import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "./Services/api-service.service";
import {FireBaseService} from "./Services/fire-base.service";
import {ActivatorComponentsService} from "./Services/activator-components.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

}
