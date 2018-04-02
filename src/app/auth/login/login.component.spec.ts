import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { AuthService } from '../auth.service';
import { Subject } from 'rxjs/Subject';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async(() => {
    authServiceStub = {
      authChange: new Subject<boolean>(),
      loginGoogle() {
        this.authChange.next(true);
      },

      login() {
        this.authChange.next(true);
      }
    };

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, ],
      declarations: [LoginComponent],      
      providers: [LoginComponent, { provide: AuthService, useValue: authServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.get(AuthService);    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with two controls', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make an email control required', () => {
    let control = component.loginForm.get('email');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make a password control required', () => {
    let control = component.loginForm.get('password');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should emits user when submitted', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['email'].setValue('test@test.com');
    component.loginForm.controls['password'].setValue('Aa123456');
    expect(component.loginForm.valid).toBeTruthy();

    component.onSubmit();
    expect(component.isAuth).toBeTruthy();
  })
});
