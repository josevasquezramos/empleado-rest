import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-listado',
  templateUrl: './empleado-listado.component.html',
  styleUrls: ['./empleado-listado.component.css']
})
export class EmpleadoListadoComponent implements OnInit {
  empleados: Observable<Empleado[]>;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  reloadData() {
    this.empleados = this.empleadoService.getListaEmpleados();
  }
  ngOnInit(): void {
    this.reloadData();
  }
  editarEmpleado(id: number) {
    this.router.navigate(['actualizar', id]);
  }
  eliminarEmpleado(id: number) {
    this.empleadoService.eliminarEmpleado(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  verEmpleado(id: number) {
    this.router.navigate(['detalles', id]);
  }
}
