import { inject, Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = 'http://ec2-18-216-136-187.us-east-2.compute.amazonaws.com:8080/api/producto';

  private http = inject(HttpClient);

  getAllProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl)
  }

  getProductById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
  
  createProduct(product: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, product);
  }

  deleteProduct(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.apiUrl}/${id}`);
  }

}
