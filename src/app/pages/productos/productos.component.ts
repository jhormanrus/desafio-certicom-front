import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  productosData: any[] = []
  productoForm: FormGroup;

  constructor(private sProducto: ProductoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initProductoForm();
    this.loadData();
  }

  loadData() {
    this.sProducto.listarProductos().pipe(take(1)).subscribe(response => {
      this.productosData = response
    });
  }

  registrarProducto() {
    const producto = {
      ...this.productoForm.value.create,
      estado: 1
    }
    this.sProducto.guardarProducto(producto).subscribe(() => {
      this.productoForm.reset();
      this.loadData();
    });
  }

  editarProducto(producto: any) {
    this.productoForm.get('edit').patchValue(producto);
  }

  actualizarProducto() {
    this.sProducto.guardarProducto(this.productoForm.value.edit).subscribe(() => {
      this.productoForm.reset();
      this.loadData();
    });
  }
  
  eliminarProducto(id: number) {
    this.sProducto.eliminarProducto(id).subscribe(() => {
      this.loadData();
    });
  }

  initProductoForm() {
    this.productoForm = this.fb.group({
      create: this.fb.group({
        nombre: this.fb.control(null, [Validators.required]),
        precio: this.fb.control(null, [Validators.required])
      }),
      edit: this.fb.group({
        id: this.fb.control(null, Validators.required),
        nombre: this.fb.control(null, [Validators.required]),
        precio: this.fb.control(null, [Validators.required]),
        estado: this.fb.control(null, [Validators.required])
      })
    });
  }
}
