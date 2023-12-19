import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import {UserService} from "../../shared/services/user.service";
import {MenssageService} from "../../shared/services/menssage.service";

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.sass']
})
export class ConfigsComponent implements OnInit{
  user: any = {};

  constructor(private authService: AuthenticationService, private userService: UserService,
              private mensageService: MenssageService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.user = user;
      });
  }

  saveChanges(): void {
    this.userService.update(this.user).subscribe(
      (updatedUser) => {
        this.user = updatedUser;
        this.mensageService.showSuccess('Dados do usuário atualizados com sucesso!');
      },
      (error) => {
        this.mensageService.showError('Erro ao atualizar os dados do usuário!');
      }
    );
  }
}
