import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MenssageService {

  private showMessageInternal(message: string, icon: SweetAlertIcon): void {
    Swal.fire({
      icon,
      title: message,
    });
  }

  showSuccess(message: string): void {
    this.showMessageInternal(message, 'success');
  }

  showError(message: string): void {
    this.showMessageInternal(message, 'error');
  }

  showInfo(message: string): void {
    this.showMessageInternal(message, 'info');
  }

  async confirm(title: string, text: string): Promise<boolean> {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      return result.isConfirmed;
    });
  }

}
