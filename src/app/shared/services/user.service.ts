import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private authService: AuthenticationService) {
    // Subscreva-se às alterações no estado de autenticação
    this.authService.isAuthenticatedUser().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Se o usuário estiver autenticado, carregue as informações do usuário
        this.loadUserData();
      } else {
        // Se não estiver autenticado, defina o usuário como nulo
        this.currentUser.next(null);
      }
    });
  }

  // Método para carregar as informações do usuário (pode ser chamado após a autenticação bem-sucedida)
  private loadUserData(): void {
    // Lógica para carregar informações do usuário do backend (por exemplo, usando um serviço HTTP)
    // Aqui você pode chamar um endpoint que retorna detalhes do usuário com base em seu ID ou outras informações
    // Substitua este exemplo com sua lógica específica
    const userId = '1'; // Supondo que você tenha um ID de usuário após a autenticação
    // Exemplo: this.http.get(`url/${userId}`).subscribe(user => this.currentUser.next(user));
  }

  // Método para obter o usuário atual
  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }
}
