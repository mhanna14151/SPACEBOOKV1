import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
  errorFlag: Boolean;
  errorMsg: String;
  user: any;
  user_id: String;
  picture: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg';
  DOB: String;
  phone: String;
  userType: String;
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {

  }

  ngOnInit() {
  }
  register(username: String, password: String, email: String, firstName: String, lastName: String, DOB: String, userType: String) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = DOB;
    this.userType = userType;
    this.errorMsg = 'Invalid username or password!';
    this.errorFlag = false;
  }
  registered(username, password, firstName, lastName, email, DOB, phone, userType) {
    this.userService.findUserByUsername(username)
      .subscribe((user: any) => {
        if (user !== null) {
          this.errorFlag = true;
          this.errorMsg = 'Username already in use, please choose another username!';
        }else {
          const user1 = {username: username, password: password, firstName: firstName, lastName: lastName, email: email,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg', DOB: DOB, phone: phone, userType: userType};
          this.userService.register(user1, password)
            .subscribe((user2) => {
              this.user = user2;
              this.user_id = user2['_id'];
              this.sharedService.user = this.user;
              this.router.navigate(['user/', this.user_id]);
            });
        }
      });
  }



}
