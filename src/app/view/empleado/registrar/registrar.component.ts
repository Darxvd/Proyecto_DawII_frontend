import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { ToastrService } from 'ngx-toastr'; 
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Cargo } from 'src/app/model/cargo';
import { Sexo } from 'src/app/model/sexo';
import { Distrito } from 'src/app/model/distrito';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

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
  
  constructor(private empleadoService: EmpleadoService, private router:Router){

  }

  ngOnInit(): void {
    this.cargarCargos;
    this.cargarDistrito;
    this.cargarSexos;
  }
  

  registrar(){
    console.log(this.empleado.id_cargo)
    console.log(this.empleado)
    this.empleadoService.guardar(this.empleado).subscribe(res=>{
        this.router.navigate(["/listar"])
        this.empleadoService.listar();
    });
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
