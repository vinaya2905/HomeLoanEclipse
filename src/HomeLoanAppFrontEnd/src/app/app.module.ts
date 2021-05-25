import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerserviceService } from 'src/app/service/CustomerserviceService';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { AddLoanApplicationComponent } from './components/add-loan-application/add-loan-application.component';
import { ShowLoanapplicationComponent } from './components/show-loanapplication/show-loanapplication.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateLoanapplicationComponent } from './components/update-loanapplication/update-loanapplication.component';
import { AddFinanceComponent } from './components/add-finance/add-finance.component';
import { UpdateFinanceComponent } from './components/update-finance/update-finance.component';
import { UpdateLandComponent } from './components/update-land/update-land.component';
import { ShowFinanceComponent } from './components/show-finance/show-finance.component';
import { ShowLandComponent } from './components/show-land/show-land.component';
import { HomeloanbankComponent } from './components/homeloanbank/homeloanbank.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CustomerStatusComponent } from './components/customer-status/customer-status.component';
import { ShowLoanappComponent } from './components/show-loanapp/show-loanapp.component';
import { LoanagreementComponent } from './components/loanagreement/loanagreement.component';
import { ShowLoanAgreementComponent } from './components/show-loan-agreement/show-loan-agreement.component';
import { UpdateLoanAgreementComponent } from './components/update-loan-agreement/update-loan-agreement.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ShowCustomerComponent,
    UpdateCustomerComponent,
    AddLoanApplicationComponent,
    ShowLoanapplicationComponent,
    UserComponent,
    LoginComponent,
    UpdateLoanapplicationComponent,
    AddFinanceComponent,
    UpdateFinanceComponent,
    UpdateLandComponent,
    ShowFinanceComponent,
    ShowLandComponent,
    HomeloanbankComponent,
    AboutComponent,
    ContactusComponent,
    CustomerStatusComponent,
    ShowLoanappComponent,
    LoanagreementComponent,
    ShowLoanAgreementComponent,
    UpdateLoanAgreementComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
