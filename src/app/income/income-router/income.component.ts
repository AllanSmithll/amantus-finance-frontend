import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-router',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.sass']
})

export class IncomeRouterComponent {

  constructor(private router: Router) {}

}
