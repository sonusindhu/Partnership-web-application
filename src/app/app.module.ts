import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CommonService } from './services/common.service';
import { AuthenticationService } from './services/auth.service';
import { AuthGuard } from './_guard/auth.service';
import { CartService } from './services/cart.service';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';

import { AuthHeaderComponent } from './common/auth-header.component';
import { AuthNavComponent } from './common/auth-nav.component';
import { AuthFooterComponent } from './common/auth-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    TestimonialsComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    DashboardComponent,
    OrderComponent,
    UserSideBarComponent,
    AuthHeaderComponent,
    AuthNavComponent,
    AuthFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [CommonService,AuthenticationService,AuthGuard,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
