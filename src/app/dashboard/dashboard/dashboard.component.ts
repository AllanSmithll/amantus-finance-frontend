import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Income } from 'src/app/shared/models/income.model';
import { ExpenseService } from 'src/app/shared/services/expense.service';
import { Expense } from 'src/app/shared/models/expense.model';
import { IncomeService } from 'src/app/shared/services/income.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  chartIncomeData: Income[] = [];
  chartExpenseData: Expense[] = [];

  lineChartData: any = {};
  lineChartOptions: any = {};

  showPie: boolean = true;
  showDough: boolean = true;

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.incomeService.list().subscribe((result) => {
      this.chartIncomeData = result;
      if (this.chartIncomeData && this.chartIncomeData.length > 0) {
        this.renderPieChart();
      } else {
        this.showPie = false;
      }
    });
    this.expenseService.list().subscribe((result) => {
      this.chartExpenseData = result;
      if (this.chartExpenseData && this.chartExpenseData.length > 0) {
        this.renderDoughnutChart();
      } else {
        this.showDough = false;
      }
    });
    this.incomeService.list().subscribe(incomes => {
      this.expenseService.list().subscribe(expenses => {
        this.lineChartData = {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [
            {
              label: 'Receitas',
              data: this.getDataByMonth(incomes),
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
            {
              label: 'Despesas',
              data: this.getDataByMonth(expenses),
              borderColor: 'rgba(255, 99, 132, 1)',
              fill: false,
            },
          ],
        };

        this.lineChartOptions = {
          scales: {
            x: {
              type: 'category',
              labels: this.lineChartData.labels,
            },
            y: {
              beginAtZero: true,
            },
          },
        };

        this.renderLineChart();
      });
    });
  }

  renderPieChart() {
    if (!this.chartIncomeData || this.chartIncomeData.length === 0) {
      return;
    }

    const groupedData: Map<string, number> = new Map();

    this.chartIncomeData.forEach((income) => {
      const category = income.category;
      const value = income.value;

      if (groupedData.has(category!)) {
        groupedData.set(category!, groupedData.get(category!)! + value!);
      } else {
        groupedData.set(category!, value!);
      }
    });

    const categories = Array.from(groupedData.keys());
    const values = Array.from(groupedData.values());

    const pieChart = new Chart('piechart', {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [
          {
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }

  renderDoughnutChart() {
    if (!this.chartExpenseData || this.chartExpenseData.length === 0) {
      return;
    }

    if (this.chartExpenseData && this.chartExpenseData.length > 0) {
      const groupedData: Map<string, number> = new Map();

      this.chartExpenseData.forEach((expense) => {
        const frequency = expense.frequency;

        if (groupedData.has(frequency!)) {
          groupedData.set(
            frequency!,
            groupedData.get(frequency!)! + expense.value!
          );
        } else {
          groupedData.set(frequency!, expense.value!);
        }
      });

      const frequencies = Array.from(groupedData.keys());
      const values = Array.from(groupedData.values());

      const doughnutChart = new Chart('doughnutchart', {
        type: 'doughnut',
        data: {
          labels: frequencies,
          datasets: [
            {
              data: values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(70, 130, 180, 0.8)',
              ],
            },
          ],
        },
      });
    }
  }

  renderLineChart() {
    const lineChart = new Chart('linechart', {
      type: 'line',
      data: this.lineChartData,
      options: this.lineChartOptions,
    });
  }

  getDataByMonth(data: any[]): number[] {
    const valuesByMonth: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    data.forEach(item => {
      const monthIndex = new Date(item.date).getMonth();
      valuesByMonth[monthIndex] += item.value;
    });

    return valuesByMonth;
  }

}
