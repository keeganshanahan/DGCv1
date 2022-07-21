import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Router } from "@angular/router";
import{ AuthenticationService } from '../shared/authentication-service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  constructor(public navCtrl: NavController,
    public authService: AuthenticationService,
    public router: Router) {}
  home() {
    this.navCtrl.navigateForward(['/home']);
  }

  ngOnInit() {
  }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  createAccount() {
    this.router.navigate(['/registration'])
  }
}
