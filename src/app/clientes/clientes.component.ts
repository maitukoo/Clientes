import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { CLIENTES } from '../mock-clientes';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  selectedCliente: Cliente;

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

  getClientes(): void {
    //this.clientes = this.clienteService.getClientes(); -- Antes de ser observable
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

}
