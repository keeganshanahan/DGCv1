import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { format } from 'path';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getAdditionalUserInfo } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public angularFireAuth: AngularFireAuth) { }

  async getUser(){
    var user = await this.angularFireAuth.currentUser;
    var uid = user.uid
    return uid;
  }
}


//need get and set methods within other branch (log-in)