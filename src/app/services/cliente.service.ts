import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<any> {
    const endpoint = `${environment.apiUrl}/cliente/listar`;
    return this.http.get(endpoint);
  }

  guardarCliente(cliente: any): Observable<any> {
    const endpoint = `${environment.apiUrl}/cliente/guardar`;
    return this.http.post(endpoint, cliente);
  }
}
