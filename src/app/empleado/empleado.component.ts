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

  // llamaEmpresa(value:string){}

  getnombre(){return this.nombre;}

  getapellido(){return this.apellido;}
  
  getedad(){return this.edad;}

  getempresa(){return this.empresa;}
}
