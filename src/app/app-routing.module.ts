import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListadoComponent } from './empleado-listado/empleado-listado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { EmpleadoCrearComponent } from './empleado-crear/empleado-crear.component';
import { EmpleadoActualizarComponent } from './empleado-actualizar/empleado-actualizar.component';

const routes: Routes = [
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadoListadoComponent },
  { path: 'agregar', component: EmpleadoCrearComponent },
  { path: 'actualizar/:id', component: EmpleadoActualizarComponent },
  { path: 'detalles/:id', component: EmpleadoDetallesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
