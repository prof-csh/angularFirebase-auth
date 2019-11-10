import { Injectable, NgZone } from '@angular/core';
import { User } from "../service/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService  {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public routher: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe
    (user => {
      if (user) {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
    })
  }
SignIn(email, password) {
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.router.navigate(['dashboard']);
    });
    this.SetUserData(result.user);
}).catch((error) => {
  window.alert(error.message)
})
}




}