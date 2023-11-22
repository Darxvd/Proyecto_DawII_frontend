import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

  data: any[] = [];
  
  constructor(private empleadoService: EmpleadoService){}

  ngOnInit(): void {
    this.llenarEmpleados();
  }
  
  llenarEmpleados(){
    this.empleadoService.listar().subscribe(
      (data) => {
        this.data = data
        console.log(this.data)
      });
  }

  Eliminar(id: number){
    return this.empleadoService.eliminar(id).subscribe(result => {
      this.llenarEmpleados();
    })
  }  

}
