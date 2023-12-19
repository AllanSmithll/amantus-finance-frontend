import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {HttpClient} from "@angular/common/http";
import {Income} from "../models/income.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_API: string = 'http://localhost:8080/users';
  private userUpdate: Subject<void> = new Subject<void>();

  constructor(private httpClient: HttpClient) { }
  // constructor(private authService: AuthenticationService) {
  //   // Subscreva-se às alterações no estado de autenticação
  //   this.authService.isAuthenticatedUser().subscribe(isAuthenticated => {
  //     if (isAuthenticated) {
  //       // Se o usuário estiver autenticado, carregue as informações do usuário
  //       this.loadUserData();
  //     } else {
  //       // Se não estiver autenticado, defina o usuário como nulo
  //       this.currentUser.next(null);
  //     }
  //   });
  // }

  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.USER_API);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.USER_API, user);
  }

  remove(id: string): Observable<any> {
    return this.httpClient.delete(`${this.USER_API}/${id}`)
      .pipe(
        tap(() => {
          this.userUpdate.next();
        })
      );
  }

  searchById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.USER_API}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.httpClient.patch<User>(`${this.USER_API}/${user.id}`, user);
  }

  // Método para carregar as informações do usuário (pode ser chamado após a autenticação bem-sucedida)
  // private loadUserData(): void {
  //   // Lógica para carregar informações do usuário do backend (por exemplo, usando um serviço HTTP)
  //   // Aqui você pode chamar um endpoint que retorna detalhes do usuário com base em seu ID ou outras informações
  //   // Substitua este exemplo com sua lógica específica
  //   const userId = '1'; // Supondo que você tenha um ID de usuário após a autenticação
  //   // Exemplo: this.http.get(`url/${userId}`).subscribe(user => this.currentUser.next(user));
  // }
  //
}
