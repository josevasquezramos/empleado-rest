import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-actualizar',
  templateUrl: './empleado-actualizar.component.html',
  styleUrls: ['./empleado-actualizar.component.css']
})
export class EmpleadoActualizarComponent implements OnInit {
  id: number;
  empleado: Empleado;
  enviado = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService ) { }

  ngOnInit(): void {
    this.empleado = new Empleado();

    this.id = this.route.snapshot.params['id'];
    this.empleadoService.getEmpleado(this.id)
      .subscribe(data => {
        console.log(data);
        this.empleado = data;
      }, error => console.log(error));
  }
  onSubmit() {
    this.enviado = true;
    this.updateEmployee();
  }
  updateEmployee() {
    this.empleadoService.actualizarEmpleado(this.empleado)
      .subscribe(data => {
        console.log(data);
        this.empleado = new Empleado();
        this.verListado();
      }, error => console.log(error));
  }

  verListado() {
    this.router.navigate(['/empleados']);
  }
}
