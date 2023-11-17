import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HomeComponent} from "./pages/home/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { IncomeListComponent } from './income/income-list/income-list.component';
import { IncomeAddComponent } from './income/income-add/income-add.component';
import { IncomeEditModalComponent } from './income/income-edit-modal/income-edit-modal.component';

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
    component: NotFoundComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'create-income',
    component: IncomeAddComponent
  },
  {
    path: 'my-incomes',
    component: IncomeListComponent
  },
  {
    path: 'edit-income-router/:id',
    component: IncomeEditModalComponent },
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
