import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder, private route: Router, private authService: AuthService) { }
  login: FormGroup;
  ngOnInit() {
    this.login = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', Validators.required],
      remember: ['']
    })
  }
  onLogin(form) {
    this.authService.login(form.controls.email.value, form.controls.password.value);
  }
}
