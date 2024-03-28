import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../info';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.loginStatusSubject.next(false);
  }

  //generate-token
  public generateToken(user: any) {
    return this.http.post(`${baseUrl}/generate-token`, user);
  }
  public loginUser(token: string) {
    localStorage.setItem('token', token);
  }
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }
  public isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      this.loginStatusSubject.next(true);
      return true;
    }
    return false;
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  public getToken() {
    return localStorage.getItem('token');
  }
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
