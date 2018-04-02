import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,) {
  }
  loginGoogle() {
    this.authService.loginGoogle();
  }
  
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;      
    });
    this.loginFormInit();
  }

  loginFormInit() {
    this.loginForm = this.formBuilder.group({      
      email: ['', [ Validators.required ]],
      password: [null, [ Validators.required ]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.loginForm.controls;

    if (this.loginForm.invalid) {

      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    let user = {         
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(user);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
