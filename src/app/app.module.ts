import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from "./pages/home/home.module";
import { SharedModule } from "./shared/shared.module";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from "./shared/material/material.module";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IncomeModule } from './income/income.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HomeModule,
    FontAwesomeModule,
    MaterialModule,
    HttpClientModule,
    IncomeModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
