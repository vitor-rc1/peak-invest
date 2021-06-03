import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs'

import { Calculate } from '../interfaces/Calculate';
import { TotalValue } from '../interfaces/TotalValue';
import { environment } from 'src/environments/environment';
import handleError from '../helpers/handleError';


@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(
    private http: HttpClient,
  ) { }

  private URL = `${environment.apiUrl}/calculate`

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  calculateTotalValue(calculate: Calculate): Observable<TotalValue> {
    return this.http.post<TotalValue>(this.URL, calculate, this.httpOptions)
      .pipe(
        catchError(handleError<TotalValue>('Informe um valor valido de parcela'))
      );
  }
}
