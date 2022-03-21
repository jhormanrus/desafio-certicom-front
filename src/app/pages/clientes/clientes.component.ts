import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientesData: any[] = []
  clienteForm: FormGroup;

  constructor(private sCliente: ClienteService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initClienteForm();
    this.loadData();
  }

  loadData() {
    this.sCliente.listarClientes().pipe(take(1)).subscribe(response => {
      this.clientesData = response
    });
  }

  registrarCliente() {
    this.sCliente.guardarCliente(this.clienteForm.value.create).subscribe(() => {
      this.clienteForm.reset();
      this.loadData();
    });
  }

  initClienteForm() {
    this.clienteForm = this.fb.group({
      create: this.fb.group({
        nombres: this.fb.control(null, [Validators.required]),
        apellidos: this.fb.control(null, [Validators.required]),
        dni: this.fb.control(null, [Validators.required]),
        telefono: this.fb.control(null),
        email: this.fb.control(null),
      })
    });
  }
}
