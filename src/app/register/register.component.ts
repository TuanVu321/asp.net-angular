import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AlertifyService} from '../services/alertify.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
    }, this.passwordMatchValidator);
  }

  // tslint:disable-next-line:typedef
  passwordMatchValidator(g: FormGroup) {
    if (g.get('password').value === g.get('confirmPassword').value) {
      return null;
    }
    return {mismatch: true};
  }


  // tslint:disable-next-line:typedef
  register() {
    // this.authService.register(this.model).subscribe(next => {
    //   this.alertify.success('registration successful');
    // }, error => {
    //   this.alertify.error(error);
    // });


  }

  // tslint:disable-next-line:typedef
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
