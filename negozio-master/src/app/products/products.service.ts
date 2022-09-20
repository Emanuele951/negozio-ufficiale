import { HttpClient } from '@angular/common/http';
import { Prodotto } from './prodotto';
import { requestOrdine } from './requestOrdine';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private orderUrl = 'http://localhost:8080/ordine/allOrder';
  private newOrderUrl = 'http://localhost:8080/ordine/new';
  private productUrl = 'http://localhost:8080/prodotto';
  handleError: any;


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.productUrl);
  }

  addOrder(order: requestOrdine): Observable<requestOrdine> {
    return this.http.post<requestOrdine>(this.newOrderUrl, order)
            .pipe(
              catchError(this.handleError('addOrder', order))
            );
  }
  getOrders():Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.orderUrl);
  }

}

