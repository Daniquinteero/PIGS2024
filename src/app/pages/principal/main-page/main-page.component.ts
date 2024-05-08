import {Component, OnInit} from '@angular/core';
import {ProductSectionComponent} from "./product-section/product-section.component";
import {ActivatorComponentsService} from "../../../Services/activator-components.service";
import {FireBaseService} from "../../../Services/fire-base.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls:['./main-page.component.css']

})
export class MainPageComponent implements OnInit{

  userData: any;
  constructor(private authService : FireBaseService, private activatorService : ActivatorComponentsService) {
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
  }
}
