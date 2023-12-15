import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  registered = false;

  doRegister(){
    this.registered = true;
  }

  isRegistered(): boolean {
    return this.registered;
  }

  getUserProfile() {
    return this.http.get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
  }

  RegisterNewUser(user: User) {
    const response = this.http.get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d');
    response.subscribe((data)=>{
      data['success'] ? this.doRegister() : null;
    });
    return response;
  }
}
