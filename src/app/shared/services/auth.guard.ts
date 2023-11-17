import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | Promise<boolean>> {
    return this.authService.isAuthenticatedUser().pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          return this.router.navigate(['/login']);
        }
      })
    );
  }
}
