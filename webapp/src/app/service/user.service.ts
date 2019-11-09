import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:' + environment.port + '/api';

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/users');
  }


}
