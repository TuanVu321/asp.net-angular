import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AlertifyService} from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService,private alertify: AlertifyService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register() {
    this.authService.register(this.model).subscribe(next => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line:typedef
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
