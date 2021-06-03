import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs'

import { Calculate } from '../interfaces/Calculate';
import { TotalValue } from '../interfaces/TotalValue';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(
    private http: HttpClient,
  ) { }

  private URL = `${environment.apiUrl}/calculate`

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  calculateTotalValue(calculate: Calculate): Observable<TotalValue> {
    return this.http.post<TotalValue>(this.URL, calculate, this.httpOptions)
      .pipe(
        catchError(this.handleError<TotalValue>(`calculateTotalValue`))
      );
  }
}
