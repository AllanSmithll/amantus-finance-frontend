import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from "./pages/home/home.module";
import { SharedModule } from "./shared/shared.module";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from "./shared/material/material.module";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { IncomeModule } from './modules/income/income.module';
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
    DashboardModule,
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
