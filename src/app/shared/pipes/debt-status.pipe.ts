import { Pipe, PipeTransform } from '@angular/core';
import {DebtStatus} from "../models/debt-status.enum";

@Pipe({
  name: 'debtStatus'
})
export class DebtStatusPipe implements PipeTransform {
  transform(status: string): string {
    switch (status.toUpperCase()) {
      case "PAID":
        return 'Paga';
      case "CANCELED":
        return 'Cancelada';
      case "PENDING":
        return 'Pendente';
      case "UNDER_NEGOTIATION":
        return 'Em negociação';
      case "PARTIALLY_PAID":
        return 'Parcialmente paga';
      default:
        return 'Status desconhecido';
    }
  }
}
