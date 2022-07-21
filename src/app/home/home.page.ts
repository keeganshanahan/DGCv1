import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'path';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private route: Router) {}
  intakeForm() {
    this.route.navigate(['/intake-form']);
  }
  login() {
    this.route.navigate(['/user-login']);
  }

}
