import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent implements OnInit {

  empleado: Empleado = new Empleado();
  enviado = false;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router ) { }
  ngOnInit(): void { }

  nuevoEmpleado(): void {
    this.enviado = false;
    this.empleado = new Empleado();
  }

  verListado() {
    this.router.navigate(['/empleados']);
  }
  onSubmit() {
    this.enviado = true;
    this.guardarEmpleado();
  }

  guardarEmpleado() {
    this.empleadoService.crearEmpleado(this.empleado).subscribe(
      data => {
        console.log(data);
        this.empleado = new Empleado();
        this.verListado();
      },
      error => console.log(error)
    );
  }
}
