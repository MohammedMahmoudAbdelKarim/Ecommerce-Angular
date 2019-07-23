import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialog,
    private route: Router) { }
  order: FormGroup;
  ngOnInit() {
    this.order = this.formBuilder.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      phone: ['', [Validators.required, CustomValidators.digits]],
      addition: ['']
    });
  }
  onOrder(form) {
    this.dialogRef.closeAll();
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Successfully Order, Thank You',
      showConfirmButton: false,
      timer: 1500
    })
    this.route.navigateByUrl('home');
  }
}
