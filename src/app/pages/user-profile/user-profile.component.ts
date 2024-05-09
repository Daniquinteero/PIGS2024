import {Component, OnInit} from '@angular/core';
import {FireBaseService} from "../../Services/fire-base.service";
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {ActivatedRoute, Router, withNavigationErrorHandler} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  navItems: string[] = ['MyData', 'MyPortfolio', 'ProductHistory'];
  activeIndex: number = 0;

  userData: any;

  constructor(private authService: FireBaseService, private activatorService: ActivatorComponentsService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      // Si hay un usuario almacenado en el almacenamiento local, establece el estado de la sesión
      this.userData = JSON.parse(currentUser);
      this.activatorService.$modalLogged.emit(true);
    } else {
      // Si no hay un usuario almacenado, el usuario probablemente no haya iniciado sesión
      // Puedes redirigirlo a la página de inicio de sesión o mostrar el formulario de inicio de sesión
    }

    this.setActive(0, this.navItems[0]);
  }

  setActive(index: number, page: string): void {
    this.activeIndex = index;
    if(this.userData){
      this.router.navigate(['userProfile', page]);
    }else{
      this.router.navigate(['home']);
    }

  }

}
