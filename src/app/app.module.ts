import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CommonService } from './services/common.service';
import { AuthenticationService } from './services/auth.service';
import { AuthGuard } from './_guard/auth.service';
import { routing } from './app.routes';
import { FormWizardModule } from 'angular2-wizard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthHeaderComponent } from './common/auth-header.component';
import { AuthNavComponent } from './common/auth-nav.component';
import { AuthFooterComponent } from './common/auth-footer.component';
import { BuildersComponent } from './admin/builders/builders.component';
import { PartnershipComponent } from './admin/partnership/partnership.component';
import { BuilderDetailsComponent } from './admin/builder-details/builder-details.component';
import { ReportComponent } from './admin/report/report.component';
import { PaymentComponent } from './admin/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    DashboardComponent,
    AuthHeaderComponent,
    AuthNavComponent,
    AuthFooterComponent,
    BuildersComponent,
    PartnershipComponent,
    BuilderDetailsComponent,
    ReportComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    FormWizardModule
  ],
  providers: [CommonService,AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
