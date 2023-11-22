import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empleado } from '../model/empleado';
import { Cargo } from '../model/cargo';
import { Distrito } from '../model/distrito';
import { Sexo } from '../model/sexo';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private _empleados:Empleado[]=[]
  private _cargo: Cargo[]=[]
  private _distritos: Distrito[]=[]
  private _sexo: Sexo[]=[]

  get Sexo(){
    return [...this._sexo]
  }

  get Distrito(){
    return [...this._distritos]
  }

  get Cargo(){
    return [...this._cargo]
  }

  get Empleado():Empleado[]{
    return [...this._empleados]
  }

  listarCargo(){
    this.http.get<Cargo[]>("http://localhost:8080/cargo").subscribe(res=>{this._cargo=res})
  }

  listarDistrito(){
    this.http.get<Distrito[]>("http://localhost:8080/distrito").subscribe(res=>{this._distritos=res})
  }

  listarSexo(){
    this.http.get<Sexo[]>("http://localhost:8080/sexo").subscribe(res=>{this._sexo=res})
  }

  private url = 'http://localhost:8080/empleado'

  constructor(private http: HttpClient) { 
    this.listarCargo();
    this.listarDistrito();
    this.listarSexo();
  }

  listar(){
    return this.http.get<Empleado[]>(this.url);
  }

  guardar(empleado: Empleado){
    return this.http.post<Empleado>(this.url + "/registrar", empleado);
  }

  editar(id: number, empleado: Empleado){
    return this.http.put<Empleado>(`${this.url}/actualizar/${empleado.id_empleado}`, empleado);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/eliminar/${id}`);
  }
}
