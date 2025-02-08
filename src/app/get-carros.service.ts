import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCarrosService {

  public url = 'http://localhost/model/getDados.php';
  constructor(private http: HttpClient) { }

  getCarros(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      catchError(error => {
        console.error('Erro na requisição:', error);
        return throwError(() => new Error('Erro ao buscar dados'));
      })
    );
  }

}
