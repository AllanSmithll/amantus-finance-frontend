import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MenssageService } from '../shared/services/menssage.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private menssageService: MenssageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError(response => this.treatsWrongAnswer(response))
    )
  }

  private treatsWrongAnswer(response: object): Observable<HttpEvent<any>> {
    if (response instanceof HttpErrorResponse) {
      this.menssageService.showError('Erro: ' + response.message);
    }
    return throwError(response);
  }
}
