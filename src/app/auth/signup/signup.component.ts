import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/selectitem';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  doctor: boolean;
  genders: SelectItem[];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.signupFormInit();
    this.genders = [];
    this.genders.push({ label: 'Выберите пол', value: '' });
    this.genders.push({ label: 'Мужской', value: 'Male' });
    this.genders.push({ label: 'Женский', value: 'Female' });
  }

  signupFormInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]
      ],
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: [null, [
        Validators.required,
        this.passwordValidator]],
      confirmPassword: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      photo: null,
      doctor: null,
      speciality: null,
      division: null
    },
      {
        validator: this.matchPassword
      });
  }

  private passwordValidator(control: FormControl): ValidationErrors {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasLowercaseLetter = /[a-z]/.test(value);
    const isLengthValid = value ? value.length > 7 : false;

    const passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter && isLengthValid;

    if (!passwordValid) {
      return {
        invalidPassword: 'Пароль должен содержать заглавные буквы, \
                                прописные буквы, цифры. \
                                Длина должна быть не менее восьми символов' };
    }

    return null;
  }

  private matchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let confirmPassword = AC.get('confirmPassword').value;
    if (password != confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true })
    } else {
      return null
    }
  }


  onSelect() {
    this.doctor = !this.doctor;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.signupForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.signupForm.controls;

    if (this.signupForm.invalid) {

      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    console.log(this.signupForm.value);
    let user = {         
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }
    this.authService.registerUser(user);
  }

}
