import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.sass']
})
export class IncomeComponent {

  constructor(private router: Router) {}

}
