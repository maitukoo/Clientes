import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: Cliente = {
    id: 1,
    name: 'Oscar',
    nif : 'P19929233',
  };

  clientes = CLIENTES;

  constructor() { }

  ngOnInit() {
  }

}
