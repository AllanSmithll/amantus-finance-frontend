import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
    imports: [
      CommonModule,
        RouterModule.forChild([
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]),
        FormsModule,
        MatCardModule,
        FontAwesomeModule,
        ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faEnvelope, faLock, faUser);
  }
}
