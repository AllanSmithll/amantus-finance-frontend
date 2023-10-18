import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  error: string = '';

  constructor(private authService: AuthenticationService,
              private router: Router) {}

  onLogin(email: string, password: string): void {
    console.log(email, password)
      if (this.authService.login(email, password)) {
        this.router.navigate(["/"]).then()
        this.error = '';
      }
      else {
        this.error = 'Credenciais inválidas. Por favor, verifique seu nome de email e senha.';
      }
  }
}
