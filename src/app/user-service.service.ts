import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { format } from 'path';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
  String uid = user.getUid();
  constructor() { }
}
//need get and set methods within other branch (log-in)