import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './view/empleado/listar/empleado.component';
import { RegistrarComponent } from './view/empleado/registrar/registrar.component';
import { ModificarComponent } from './view/empleado/modificar/modificar.component';

const routes: Routes = [
  {path: 'listar', component: EmpleadoComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'modificar/:id', component: ModificarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
