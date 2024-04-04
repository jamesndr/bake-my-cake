import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CakeOrder } from '../models/cake-order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CakeOrderService {
  cakeOrderUrl = 'http://localhost:3000/cakeOrder';
  
  constructor(private http: HttpClient) {}

  saveCakeOrder(cakeOrder: CakeOrder): Observable<CakeOrder> {
    return this.http.post<CakeOrder>(this.cakeOrderUrl, cakeOrder);
  }

  getCakeOrders():Observable<Array<CakeOrder>>{
    return this.http.get<Array<CakeOrder>>(this.cakeOrderUrl);
  }

  deleteCakeOrder(id: number): Observable<CakeOrder>{
    return this.http.delete<CakeOrder>(`${this.cakeOrderUrl}/${id}`)
  }
}
