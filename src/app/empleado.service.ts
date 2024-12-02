import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = 'http://localhost:8092/empleado';

  constructor(private http: HttpClient) { }

  getEmpleado(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

  getListaEmpleados(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  crearEmpleado(empleado: Object): Observable<Object> {
    return this.http.post(this.baseUrl, empleado);
  }

  actualizarEmpleado(empleado: Object): Observable<Object> {
    return this.http.put(this.baseUrl, empleado);
  }

  eliminarEmpleado(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
