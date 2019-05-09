import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes() : Observable<Cliente[]>{
    return of(CLIENTES);
  }
}
