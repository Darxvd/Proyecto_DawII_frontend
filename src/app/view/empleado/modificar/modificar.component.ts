import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent  implements OnInit {

  @ViewChild('empleadoForm') form !: NgForm;

  empleado:Empleado={
    id_empleado: 0,
    nom_empleado: "",
    apl_empleado: "",
    edad_empleado: 0,
    id_sexo: 0,
    dni_empleado: "",
    dir_empleado: "",
    id_distrito: 0,
    id_cargo: 0
  }
  
  constructor(private empleadoService: EmpleadoService){}


  ngOnInit(): void {
    this.cargarCargos;
    this.cargarDistrito;
    this.cargarSexos;
  }

  modificar(){

  }
  

  get cargarCargos() {
    return this.empleadoService.Cargo;
  }

  get cargarSexos(){
    return this.empleadoService.Sexo;
  }

  get cargarDistrito(){
    return this.empleadoService.Distrito;
  }


}
