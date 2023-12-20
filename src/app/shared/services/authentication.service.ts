import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {BehaviorSubject, Observable, map, filter, first} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private userService: UserService) {}

  login(email: string, password: string): Observable<boolean> {
    return this.userService.list().pipe(
      map((users) => users.find((user) => user.email === email && user.password === password)),
      map((user) => {
        const isAuthenticated = !!user;
        this.isAuthenticated.next(isAuthenticated);
        this.currentUser.next(user || null);
        return isAuthenticated;
      })
    );
  }


  register(name: string, email: string, password: string, birthdate: Date): Observable<boolean> {
    const userCreation: User = { email, password, name, birthdate, listIncomes: [], listExpenses: [] };
    return this.userService.register(userCreation).pipe(
      map((registeredUser) => {
        this.isAuthenticated.next(true);
        return true;
      })
    );
  }

  logout(): void {
    this.isAuthenticated.next(false);
  }

  isAuthenticatedUser(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }
}
