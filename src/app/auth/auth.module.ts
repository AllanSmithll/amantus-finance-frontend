import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { MaterialModule } from '../layout/material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
    imports: [
      CommonModule,
        RouterModule.forChild([
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]),
        FormsModule,
        MaterialModule,
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
