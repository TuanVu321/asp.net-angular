import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AlertifyService} from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logger in successfuly');
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line:typedef
  loggedIn() {
    return this.authService.loggedIn();
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
