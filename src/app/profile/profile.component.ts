import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserProfile()
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
