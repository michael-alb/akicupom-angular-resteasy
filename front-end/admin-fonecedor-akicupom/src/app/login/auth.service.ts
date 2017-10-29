import { Router } from '@angular/router';
import { Injectable,  EventEmitter } from '@angular/core';
import { Usuario } from '../shared/entities/usuario';

@Injectable()
export class AuthService {

  private usuarioAuth: Boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean> ();

  constructor(private router: Router) { }

  Login(usuario: Usuario) {

    if (usuario.email === 'eu@akicupom.com.br' && usuario.password === '123456') {

        this.usuarioAuth = true;
        this.router.navigate(['dashboard']);
        this.mostrarMenuEmitter.emit(true);

    }else {

        this.usuarioAuth = false;
        this.mostrarMenuEmitter.emit(false);

    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAuth;
  }

}
