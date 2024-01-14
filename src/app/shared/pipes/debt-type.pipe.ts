import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debtType'
})
export class DebtTypePipe implements PipeTransform {
  transform(type: string): string {
    switch (type.toUpperCase()) {
      case "CREDIT":
        return 'Crédito';
      case "FINANCING":
        return 'Financiamento';
      case "LOAN":
        return 'Empréstimo';
      default:
        return 'Tipo desconhecido';
    }
  }
}
