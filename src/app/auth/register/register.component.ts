import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  error: string = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onRegister(name: string, email: string, password: string, birthdate: Date): void {
    this.authService.register(name, email, password, birthdate).subscribe((registrationSuccessful: boolean) => {
        if (registrationSuccessful) {
          this.router.navigate(['/login']).then(() => {
            this.error = '';
          });
        } else {
          this.error = 'Usuário existente. Por favor, entre em sua conta.';
        }
      });
  }

  parseDate(dateString: string): Date {
    if (dateString.match(/^\d{4}-\d{2}-\d{2}/)) {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const year = +parts[0];
        const month = +parts[1] - 1;
        const day = +parts[2];
        return new Date(year, month, day);
      }
    } else if (dateString.match(/^\d{2}\/\d{2}\/\d{4}/)) {
      const parts = dateString.split('/');
      if (parts.length === 3) {
        const day = +parts[0];
        const month = +parts[1] - 1;
        const year = +parts[2];
        return new Date(year, month, day);
      }
    }
    // @ts-ignore
    return null;
}
}
