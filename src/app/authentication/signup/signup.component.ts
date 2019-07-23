import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { MatStepper } from '@angular/material';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }
  genders: string[] = ['Female', 'Male'];
  selectedGender: string;
  signup: FormGroup;
  changeGender(gender) {
    this.selectedGender = gender;
  }
  goForward(stepper: MatStepper) {
    stepper.next();
  }
  goBack(stepper: MatStepper) {
    stepper.previous();
  }
  ngOnInit() {
    const pass = new FormControl(null, [Validators.required, Validators.minLength(6),
    Validators.maxLength(12), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])*.{0,}$/)]);
    this.signup = this.formBuilder.group({
      lname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+[0-9]*/)]],
      fname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+[0-9]*/)]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: pass,
      password_confirmation: [null, [Validators.required, CustomValidators.equalTo(pass)]],
      phone: ['', [Validators.required, CustomValidators.digits]],
      location: [''],
      birthdate: [''],
      gender: [''],
      career: [''],
      personalIMG: ['']
    });
  }
  onSignup(form) {
    this.auth.singup(form.controls.email.value, form.controls.password.value);
  }
}
