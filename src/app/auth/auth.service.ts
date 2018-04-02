import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import * as firebase from 'firebase/app';

import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(
        private router: Router,
        private afAuth: AngularFireAuth ) { }

    registerUser(authData: AuthData) {
        this.afAuth.auth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
            console.log(result);
            this.authSuccessfully();
        })
            .catch(error => {
                console.log(error);
            });
    }

    login(authData: AuthData) {
        this.afAuth.auth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {                
                this.authSuccessfully();
            })
            .catch(error => {
                console.log(error);
            });
    }

    loginGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(result => {                
            this.authSuccessfully();
        })
        .catch(error => {
            console.log(error);
        });
      }

    logout() {
        // this.trainingService.cancelSubscriptions();
        this.afAuth.auth.signOut();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
    }

    getUser() {
        return this.afAuth.auth.currentUser;
    }

    isAuth() {
        return this.isAuthenticated;
    }

    private authSuccessfully() {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/add-question']);
    }
}