import { Component } from '@angular/core';
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {FireBaseService} from "../../Services/fire-base.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-dialog-account',
  templateUrl: './user-dialog-account.component.html',
  styleUrls: ['./user-dialog-account.component.css']
})
export class UserDialogAccountComponent {
  constructor(private activatorService:ActivatorComponentsService, private authService: FireBaseService,private router: Router, private route: ActivatedRoute) {
  }

  loginUserDialogAccountActivator(){
    this.activatorService.setUserDialogAccountActivator();
  }

  logOut(){
    this.authService.signOut();
    this.router.navigate(['home']);
  }


}
