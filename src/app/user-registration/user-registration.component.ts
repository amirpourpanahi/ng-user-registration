import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  registrationForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'bio': new FormControl(null)
    });
  }

  onSubmit() {
    this.http
      .get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d')
      .subscribe(responseData => {
        if(responseData['success']){
          this.router.navigate(['profile']);
        }
      });
  }
}
