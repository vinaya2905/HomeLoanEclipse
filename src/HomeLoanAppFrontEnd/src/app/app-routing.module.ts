import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddLoanApplicationComponent } from './components/add-loan-application/add-loan-application.component';
import { LoginComponent } from './components/login/login.component';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { ShowLoanapplicationComponent } from './components/show-loanapplication/show-loanapplication.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateLoanapplicationComponent } from './components/update-loanapplication/update-loanapplication.component';
import { UserComponent } from './components/user/user.component';
import { UpdateFinanceComponent } from './components/update-finance/update-finance.component';
import { UpdateLandComponent } from './components/update-land/update-land.component';
import { ShowFinanceComponent } from './components/show-finance/show-finance.component';
import { ShowLandComponent } from './components/show-land/show-land.component';
import { HomeloanbankComponent } from './components/homeloanbank/homeloanbank.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerStatusComponent } from './components/customer-status/customer-status.component';
import { LoanagreementComponent } from './components/loanagreement/loanagreement.component';
import { ShowLoanAgreementComponent } from './components/show-loan-agreement/show-loan-agreement.component';
import { UpdateLoanAgreementComponent } from './components/update-loan-agreement/update-loan-agreement.component';


const routes: Routes = [
  {
    path:'add-customer',component:AddCustomerComponent
  },
  {
    path:'show-all',component:ShowCustomerComponent
  },
  {
    path:'update-customer/:id',component:UpdateCustomerComponent
  },
  {
    path:'update-loanapplication/:id',component:UpdateLoanapplicationComponent
  },
  {
    path:'add-loanapplication',component:AddLoanApplicationComponent
  },
  {
    path:'showall-loanapplication',component:ShowLoanapplicationComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'update-finance/:id',component:UpdateFinanceComponent
  },
  {
    path:'update-land/:id',component:UpdateLandComponent
  },
  {
    path:'user-page',component:UserComponent
  },
  {
    path:'show-finance',component:ShowFinanceComponent
  },
  {
    path:'show-land',component:ShowLandComponent
  },
  {
    path:'',component:HomeloanbankComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'customer-status',component:CustomerStatusComponent
  },
  {
    path:'add-loanAgmnt',component:LoanagreementComponent
  },
  {
    path:'show-loanAgmt',component:ShowLoanAgreementComponent
  },
  {
    path:'update-loanagreement/:id',component:UpdateLoanAgreementComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
