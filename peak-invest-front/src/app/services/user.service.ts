import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs'

import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  private URL = 'http://localhost:30006/user'

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/${id}`)
      .pipe(
        catchError(this.handleError<User>(`getHero id=${id}`))
      )
  }
}
