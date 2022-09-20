import { Cliente } from './clienti/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  private clientiUrl = 'http://localhost:8080/cliente';
  handleError: any;

  constructor(private http: HttpClient) {

   }
   getClienti(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientiUrl);
  }
}
