import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'

import { User } from '../interfaces/User';
import { environment } from 'src/environments/environment';
import handleError from '../helpers/handleError';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  
  private URL = `${environment.apiUrl}/user`

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/${id}`)
      .pipe(
        catchError(handleError<User>('Usuário não encontrado'))
      )
  }
}
