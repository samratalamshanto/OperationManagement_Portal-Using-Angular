import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  base_url: any;

  helperJwt = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) {
    if (environment.production_type_bool) {
      this.base_url = environment.server_url;
    } else {
      this.base_url = environment.local_url;
      console.log(this.base_url);
    }
  }

  login(user: any) {
    return this.http.post(`${this.base_url}/auth/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  isExpired() {
    let token = localStorage.getItem('token');
    return this.helperJwt.isTokenExpired(this.getToken());
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  hasToken(): boolean {
    let token = localStorage.getItem('token');
    if (token === null || token.length === 0) {
      // console.log('Nulll ');
      return false;
    } else {
      return true;
    }
  }
}
