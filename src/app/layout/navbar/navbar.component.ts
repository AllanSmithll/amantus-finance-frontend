import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/services/authentication.service";
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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isNavbarVisible = !['/login', '/register'].includes(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.authService.isAuthenticatedUser().subscribe(isAuthenticated => {
      this.varUserIsLoggedIn = isAuthenticated;
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(["/"]).then();
  }
}
