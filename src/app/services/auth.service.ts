import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  BaseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodeedToken: any;

  // tslint:disable-next-line:typedef
  login(model: any) {
    return this.httpClient.post(this.BaseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodeedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  // tslint:disable-next-line:typedef
  register(model: any) {
    return this.httpClient.post(this.BaseUrl + 'register', model);
  }

  // tslint:disable-next-line:typedef
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
