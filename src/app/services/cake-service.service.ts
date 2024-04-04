import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';
import { CakeOrder } from '../models/cake-order';

@Injectable({
  providedIn: 'root',
})
export class CakeServiceService {
  cakesUrl = 'http://localhost:3000/cakes';

  constructor(private http: HttpClient) {}

  getAllCakes(): Observable<Array<Cake>> {
    return this.http.get<Array<Cake>>(this.cakesUrl);
  }

  getCake(id?:string): Observable<Cake>{
    return this.http.get<Cake>(`${this.cakesUrl}/${id}`);
  }

}
