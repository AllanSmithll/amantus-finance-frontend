import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  error: string = '';
  constructor(private authService: AuthenticationService,
              private router: Router) {}

  onRegister(name: string, email: string, password: string, birthdate: Date): void {
    if (this.authService.register(name, email, password, birthdate)) {
      this.router.navigate(["/login"]).then()
      this.error = '';
    }
    else {
      this.error = 'Usuário existente. Por favor, entre em sua conta.';
    }
  }

  parseDate(dateString: string): Date {
    if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return new Date(dateString);
    }
    // @ts-ignore
    return null;
  }
}
