import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MenssageService} from "../../shared/services/menssage.service";
import {Debt} from "../../shared/models/debt.model";
import {DebtService} from "../../shared/services/debt.service";

@Component({
  selector: 'app-debt-add',
  templateUrl: './debt-add.component.html',
  styleUrls: ['./debt-add.component.sass']
})
export class DebtAddComponent {
  transientDebt: Debt;
  formGroup: FormGroup;

  constructor(private debtService: DebtService,
              private messageService: MenssageService,
              private fb: FormBuilder) {
    this.transientDebt  = {} as Debt;
    this.formGroup = this.fb.group({
      creditor_name: ['', Validators.required],
      value: [null, [Validators.required, Validators.min(0)]],
      value_pending: [null, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],
      interest_rates_tax: [null, [Validators.min(0)]],
      penalties: [null, [Validators.min(0)]],
      date: [null, Validators.required],
      date_expiration: [null, Validators.required],
      status: [''],
      contact_information: ['']
    });
  }

  create(): void {
    if(this.formGroup.valid) {
      this.debtService.register(this.transientDebt).subscribe(
        () => {
          this.messageService.showSuccess('Dívida cadastrada com sucesso!');
        },
        (error) => {
          this.messageService.showError('Erro ao cadastrar dívida!');
          console.error('Erro ao cadastrar dívida: ', error);
        }
      )
    } else {
      this.messageService.showError('Erro ao cadastrar dívida! Verifique os campos obrigatórios');
    }
  }
}
