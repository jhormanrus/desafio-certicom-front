import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  listarProductos(): Observable<any> {
    const endpoint = `${environment.apiUrl}/producto/listar`;
    return this.http.get(endpoint);
  }

  guardarProducto(producto: any): Observable<any> {
    const endpoint = `${environment.apiUrl}/producto/guardar`;
    return this.http.post(endpoint, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    const endpoint = `${environment.apiUrl}/producto/eliminar/${id}`;
    return this.http.delete(endpoint);
  }
}
