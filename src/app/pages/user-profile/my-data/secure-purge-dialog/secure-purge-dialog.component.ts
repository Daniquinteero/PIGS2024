import { Component } from '@angular/core';
import {FireBaseService} from "../../../../Services/fire-base.service";
import {ActivatorComponentsService} from "../../../../Services/activator-components.service";

@Component({
  selector: 'app-secure-purge-dialog',
  templateUrl: './secure-purge-dialog.component.html',
  styleUrls: ['./secure-purge-dialog.component.css']
})
export class SecurePurgeDialogComponent {
  constructor(private authService: FireBaseService, private activatorService: ActivatorComponentsService) {
  }

  purgeUser(){
    this.authService.purgeUser();
  }

  setSecurePurgeActivator(){
    this.activatorService.setSecurePurgeActivator();
  }
}
