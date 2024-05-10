import {Component, OnInit} from '@angular/core';
import {FireBaseService} from "../../../Services/fire-base.service";
import {ActivatorComponentsService} from "../../../Services/activator-components.service";

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit{
  protected email: any;
  protected name:any;
  protected password: any;
  editable: boolean = false;
  editable2: boolean = false;
  editable3: boolean = false;
  editedContent: string = "";
  constructor(private authService: FireBaseService, private activatorService: ActivatorComponentsService) {
  }

  ngOnInit() {
    const dataInformation = localStorage.getItem('Datainformation');
    const currentUser = localStorage.getItem('currentUser');
    if (dataInformation && currentUser) {
      // Si hay un usuario almacenado en el almacenamiento local, establece el estado de la sesión
      this.email = JSON.parse(dataInformation).user.email;
      this.name = JSON.parse(currentUser).user;
      console.log(this.name);
    } else {
      console.log("error");
      // Si no hay un usuario almacenado, el usuario probablemente no haya iniciado sesión
      // Puedes redirigirlo a la página de inicio de sesión o mostrar el formulario de inicio de sesión
    }

  }

  updateUserName(name: string){
    this.authService.updateUserName(name);
  }
  updateUserEmail(email: string){
    this.authService.updateUserEmail(email);
  }

  toggleEditableName(): void {
    this.editable = !this.editable;
    if(!this.editable){
      this.editedContent = this.name;
      this.updateUserName(this.editedContent);
    }
  }
  toggleEditableEmail(): void {
    this.editable2 = !this.editable2;
    if(!this.editable2){
      this.editedContent = this.email;
      this.updateUserEmail(this.editedContent);
    }
  }
  toggleEditablePassword(): void {
    this.editable3 = !this.editable3;
    if(!this.editable3){
      this.editedContent = this.password;
      this.updateUserName(this.editedContent);
    }
  }



  setSecurePurgeActivator(){
    this.activatorService.setSecurePurgeActivator();
  }

  getSecurePurgeActivator(){
    return this.activatorService.getSecurePurgeActivator();
  }
}
