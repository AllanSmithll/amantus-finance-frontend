import { faChartBar, faWallet, faLineChart, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { 
    constructor(library: FaIconLibrary) {
      library.addIcons(faChartBar, faWallet, faLineChart, faPhone, faEnvelope);
    }
}
