import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/userModel';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private localStorageService: LocalstorageService) { }

  user: UserModel;

  getCurrentUser(): UserModel {
    return this.user;
  }

  setCurrentUser(user: UserModel) {
    this.user = user;
  }

  getUserByUsernameFromTheServer(username: string): Observable<UserModel> {
    
    const url = "http://localhost:8080/users/finduserbyusername/" + username;

    return this.http.get<UserModel>(url, { observe: 'body' });
  }

}
