import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../modules/auth/services/authentication.service";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  varUserIsLoggedIn: boolean = false;
  isNavbarVisible: boolean = true;

  constructor(private authService: AuthenticationService, private router: Router) {
    // Assine os eventos de navegação para verificar a rota ativa
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifique a rota ativa e defina a visibilidade da barra de navegação
        this.isNavbarVisible = !['/login', '/register'].includes(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.authService.isAuthenticatedUser().subscribe(isAuthenticated => {
      this.varUserIsLoggedIn = isAuthenticated;
    });
  }
}
