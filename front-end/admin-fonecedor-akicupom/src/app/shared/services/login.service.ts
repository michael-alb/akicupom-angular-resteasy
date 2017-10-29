import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginService {

  constructor( public afAuth: AngularFireAuth ) { }

  login(email, password) {

    return this.afAuth.auth.signInWithEmailAndPassword(email, password);

    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'maikonmorais@gmail.com' && password === '123'){
          resolve('Dados corretos!');
          return;
        } else {
          reject('Dados de acesso incorretos');
        }
      }, 2000);

    });*/
  }

}
