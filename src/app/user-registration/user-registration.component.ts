import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  registrationForm: FormGroup;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'bio': new FormControl(null)
    });
  }

  onSubmit() {
    this.userService.RegisterNewUser(this.registrationForm.value)
      .subscribe(responseData => {
        if(responseData['success']){
          this.router.navigate(['profile']);
        }
      });
  }
}
