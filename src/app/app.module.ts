import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoCrearComponent } from './empleado-crear/empleado-crear.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { EmpleadoListadoComponent } from './empleado-listado/empleado-listado.component';
import { EmpleadoActualizarComponent } from './empleado-actualizar/empleado-actualizar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoCrearComponent,
    EmpleadoDetallesComponent,
    EmpleadoListadoComponent,
    EmpleadoActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
