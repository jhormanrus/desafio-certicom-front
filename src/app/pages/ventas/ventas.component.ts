import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: [
  ]
})
export class VentasComponent implements OnInit {

  ventasData: any[] = []
  ventaData: any
  ventaForm: FormGroup;
  dateSearch: string;

  constructor(private sVenta: VentaService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initVentaForm();
    this.loadData();
  }

  loadData() {
    this.sVenta.listarVentas().pipe(take(1)).subscribe(response => {
      this.ventasData = response
    });
  }

  listarVentasPorFecha() {
    this.sVenta.listarVentasPorFecha(this.dateSearch).pipe(take(1)).subscribe(response => {
      this.ventasData = response
    });
  }

  registrarVenta() {
    this.sVenta.guardarVenta(this.ventaForm.value.create).subscribe(() => {
      this.ventaForm.reset();
      this.loadData();
    });
  }

  verDetalle(venta: any) {
    this.ventaData = venta
    this.sVenta.listarDetalleVenta(venta.id).pipe(take(1)).subscribe(response => {
      venta.detalle = response
    });
  }

  initVentaForm() {
    this.ventaForm = this.fb.group({
      create: this.fb.group({
        fecha: this.fb.control(null, [Validators.required]),
        cliente: this.fb.control(null, [Validators.required])
      })
    });
  }
}
