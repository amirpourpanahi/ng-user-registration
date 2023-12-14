import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: {
    name: string,
    email: string,
    bio: string
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http
      .get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2')
      .subscribe(responseData => {
        this.user = {
          name: responseData['name'],
          email: responseData['email'],
          bio: responseData['bio']
        }
      });
  }

  onClickRegister(){
    this.router.navigate(['user-registration']);
  }

}
