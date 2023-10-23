import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../modules/auth/services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  varUserIsLoggedIn: boolean = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isAuthenticatedUser().subscribe(isAuthenticated => {
      this.varUserIsLoggedIn = isAuthenticated;
    });
  }
}
