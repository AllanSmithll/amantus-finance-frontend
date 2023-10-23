import {Injectable} from '@angular/core';
import {USERS} from "../../../shared/models/USERS";
import {User} from "../../../shared/models/user.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  users = USERS;

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.isAuthenticated.next(true); // Notificar sobre a mudança
      return true;
    } else {
      this.isAuthenticated.next(false); // Notificar sobre a mudança
      return false;
    }
  }

  register(name: string, email: string, password: string, birthdate: Date): boolean {
    let userCreation = new User(email, password, name, birthdate);

    const existingUser: User | undefined = this.users.find(user => user.email === email);
    if (existingUser) {
      return false;
    } else {
      this.users.push(userCreation);
      return true;
    }
  }

  logout(): void {
    this.isAuthenticated.next(false);
  }

  isAuthenticatedUser(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
