import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from "../empleado.service";
import { EmpleadoListadoComponent }
  from '../empleado-listado/empleado-listado.component';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleado = new Empleado();
    this.id = this.route.snapshot.params['id'];

    this.empleadoService.getEmpleado(this.id)
      .subscribe(data => {
        console.log(data);
        this.empleado = data;
      }, error => console.log(error));
  }
  verListado() {
    this.router.navigate(['/empleados']);
  }
}
