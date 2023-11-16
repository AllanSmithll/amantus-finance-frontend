import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './modules/auth/components/login/login.component';
import {RegisterComponent} from './modules/auth/components/register/register.component';
import {HomeComponent} from "./pages/home/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {DashboardComponent} from "./modules/dashboard/components/dashboard/dashboard.component";
import { IncomeListComponent } from './modules/income/components/income-list/income-list.component';
import { IncomeAddComponent } from './modules/income/components/income-add/income-add.component';
import { IncomeEditModalComponent } from './modules/income/components/income-edit-modal/income-edit-modal.component';

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
    path: 'edit-income/:id', 
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
