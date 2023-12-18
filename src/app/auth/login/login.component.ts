import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { MenssageService } from 'src/app/shared/services/menssage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private menssageService: MenssageService
  ) {}

  onLogin(email: string, password: string): void {
    this.router.navigate(['/dashboard']).then();
    this.authService.login(email, password).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/dashboard']).then();
      } else {
        this.menssageService.showError(
          'Credenciais inválidas. Por favor, verifique seu nome de email e senha.'
        );
      }
    });
  }
}
