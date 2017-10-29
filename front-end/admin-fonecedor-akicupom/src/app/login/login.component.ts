import { Usuario } from './../shared/entities/usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(usuario: Usuario) {
    // console.log(this.usuario);
    this.authService.Login(this.usuario);
  }

}
