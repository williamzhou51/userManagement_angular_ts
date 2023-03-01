//@ts-nocheck
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from './app.config';
import { BehaviorSubject, Observable, pipe, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = AppConfig.API_URL;

  loggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  login(user): Observable<any> {
    let params = new HttpParams();
    params = params.append("username", user.username);
    params = params.append("password", user.password);
    return this.http.post(this.API_URL + "/login", params)
      .pipe(map((res) => {
        this.loggedIn.next(res.success);
        if (this.loggedIn) {
          this.router.navigate(['/lc']);
        }
        return res;
      }));
  }

  checklogin(): Observable<any> {
    return this.http.get(this.API_URL + "/checklogin", { withCredentials: true })
      .pipe(map((res) => {
        this.loggedIn.next(res.success);
        return res;
      }));
  }

  logout(): Observable<any> {
    return this.http.post(this.API_URL + "/logout", {}, { withCredentials: true })
      .pipe(map(res => {
        res.json();
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
        return res;
      }));
  }

  register(user): Observable<any> {
    return this.http.post(this.API_URL + "/users", user)
      .pipe(map(res => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/login']);
        }
      }));
  }

}
