import {Injectable} from '@angular/core';
import { HttpService } from "./http.service";
import {User} from "../models/user.model";
import {BehaviorSubject, Observable, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private apiUsersUrl  = 'http://localhost:3000/users';

  constructor(private http: HttpService) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get(this.apiUsersUrl).pipe(
      map(users => {
        const user = users.find((user: any) => user._email === email && user._password === password);
        const isAuthenticated = !!user;
        this.isAuthenticated.next(isAuthenticated);
        return isAuthenticated;
      })
    );
  }

  register(name: string, email: string, password: string, birthdate: Date): Observable<boolean> {
    const userCreation = new User(email, password, name, birthdate);
    return this.http.post(this.apiUsersUrl, userCreation).pipe(
      map((response: User) => {
        const isAuthenticated = !!response;
        this.isAuthenticated.next(isAuthenticated);
        return isAuthenticated;
      })
    );
  }

  logout(): void {
    this.isAuthenticated.next(false);
  }

  isAuthenticatedUser(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
