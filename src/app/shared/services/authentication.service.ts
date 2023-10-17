import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private isAuthenticated: boolean = false;

    login(email: string, password: string): boolean {
        if (email === 'teste@email' && password === 'senha') {
            this.isAuthenticated = true;
            return true;
        } else {
            this.isAuthenticated = false;
            return false;
        }
    }

    logout(): void {
        this.isAuthenticated = false;
    }

    isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }
}
