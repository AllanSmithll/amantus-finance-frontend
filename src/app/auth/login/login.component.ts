import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  error: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/dashboard']).then();
        this.error = '';
      } else {
        this.error =
          'Credenciais inválidas. Por favor, verifique seu nome de email e senha.';
      }
    });
  }
}
