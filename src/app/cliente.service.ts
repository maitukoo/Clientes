import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,private messageService: MessageService) { }

  // getClientes() : Observable<Cliente[]>{
  //   this.messageService.add('ClienteService: fetched heroes');
  //   return of(CLIENTES);
  // }

  getClientes (): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl)
      .pipe(
        tap(_ => this.log('fetched Clientes')),
        catchError(this.handleError<Cliente[]>('getClientes', []))
      );
  }

  private log(message: string) {
    this.messageService.add(`ClienteService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
