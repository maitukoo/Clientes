import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private messageService: MessageService) { }

  getClientes() : Observable<Cliente[]>{
    this.messageService.add('ClienteService: fetched heroes');
    return of(CLIENTES);
  }
}
