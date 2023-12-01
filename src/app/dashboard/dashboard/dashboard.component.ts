import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DashboardData } from 'src/app/shared/models/dashboard-data.model';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData | undefined;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(
      (data: DashboardData) => {
        this.dashboardData = data;
        // Aqui você pode adicionar lógica adicional para processar os dados conforme necessário
      },
      error => {
        console.error('Erro ao carregar dados do dashboard:', error);
      }
    );
  }
}