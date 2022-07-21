import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(environment.api);
  }

  getWithId(id: string): Observable<any> {
    return this.http.get(`${environment.api}/${id}`);
  }

  post(product: any): Observable<any> {
    return this.http.post(environment.api, product);
  }

  put(product: any): Observable<any> {
    return this.http.put(`${environment.api}/${product._id}`, product);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.api}/${id}`);
  }
  
}
