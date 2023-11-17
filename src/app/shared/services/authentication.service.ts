import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {BehaviorSubject, Observable, map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private apiUsersUrl  = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.apiUsersUrl).pipe(
      map(users => {
        const user: User | undefined = users.find((user: any) => user._email === email && user._password === password);
        const isAuthenticated: boolean = !!user;
        this.isAuthenticated.next(isAuthenticated);
        return isAuthenticated;
      })
    );
  }

  register(name: string, email: string, password: string, birthdate: Date): Observable<boolean> {
    const userCreation: User = new User(email, password, name, birthdate);
    return this.http.post<User>(this.apiUsersUrl, userCreation).pipe(
      map((response: User) => {
        const isAuthenticated: boolean = !!response;
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
