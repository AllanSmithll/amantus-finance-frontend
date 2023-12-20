import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HomeComponent} from "./pages/home/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import { IncomeListComponent } from './income/income-list/income-list.component';
import { IncomeAddComponent } from './income/income-add/income-add.component';
import { IncomeEditModalComponent } from './income/income-edit-modal/income-edit-modal.component';
import { AuthGuard } from "./shared/services/auth.guard";
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseAddComponent } from './expense/expense-add/expense-add.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ConfigsComponent } from './pages/configs/configs.component';
import { BudgetAddComponent } from './budget/budget-add/budget-add.component';
import { BudgetListComponent } from './budget/budget-list/budget-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'configs',
    component: ConfigsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-income',
    component: IncomeAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-incomes',
    component: IncomeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-income-router/:id',
    component: IncomeEditModalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-expenses',
    component: ExpenseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-expense',
    component: ExpenseAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-budget',
    component: BudgetAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-budgets',
    component: BudgetListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
