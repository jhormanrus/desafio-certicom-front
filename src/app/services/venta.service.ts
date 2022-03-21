import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  listarVentas(): Observable<any> {
    const endpoint = `${environment.apiUrl}/venta/listar`;
    return this.http.get(endpoint);
  }

  listarVentasPorFecha(fecha: string): Observable<any> {
    const endpoint = `${environment.apiUrl}/venta/listarPorFecha/${fecha}`;
    return this.http.get(endpoint);
  }

  listarDetalleVenta(id: number): Observable<any> {
    const endpoint = `${environment.apiUrl}/venta/detalle/${id}`;
    return this.http.get(endpoint);
  }

  buscarVentaPorId(id: number): Observable<any> {
    const endpoint = `${environment.apiUrl}/venta/buscarPorId/${id}`;
    return this.http.get(endpoint);
  }

  guardarVenta(venta: any): Observable<any> {
    const endpoint = `${environment.apiUrl}/venta/guardar`;
    return this.http.post(endpoint, venta);
  }
}
