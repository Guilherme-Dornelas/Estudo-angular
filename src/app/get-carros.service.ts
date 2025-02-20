import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCarrosService {

  private baseUrl = 'http://estudo.local/controller/';

  constructor(private http: HttpClient) { }

  getCarros(): Observable<any> {
    const url = `${this.baseUrl}listarCarros.php`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Erro na requisição:', error);
        return throwError(() => new Error('Erro ao buscar dados'));
      })
    );
  }

  searchCarros(carro: string): Observable<any> {
    const url = `${this.baseUrl}searchCarros.php`;
    return this.http.post<any>(url, { carro }).pipe(
      catchError(error => {
        console.error('Erro na requisição:', error);
        return throwError(() => new Error('Erro ao buscar dados'));
      })
    );
  }
}
