import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {


  private nombre='Carlos';
  private apellido='Zepeda';
  private edad=27;
  private empresa='Bar-beria';

  habilitacionCuadro =false;

  userRegistrado =false;

  textoDeRegistro ="No hay nadie Registrado";

  getRegistroUser(){

    this.userRegistrado = false;
    // return this.userRegistrado;

  }

  setUsuarioregistrado(event:Event){
    // alert('el usuario se acaba de registrar');

    // alert(event.target);
    // this.textoDeRegistro=`El usuario ${(<HTMLInputElement>event.target).value} esta registrado`;

    if ((<HTMLInputElement>event.target).value=="si") {
      this.textoDeRegistro="El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro="No hay nadie registrado";
    }
    
  }

  // setUsuarioNoregistrado(event:Event){

  //   this.textoDeRegistro="El usuario no esta registrado";
  // }

  // llamaEmpresa(value:string){}



  getnombre(){return this.nombre;}

  getapellido(){return this.apellido;}
  
  getedad(){return this.edad;}

  getempresa(){return this.empresa;}
}
