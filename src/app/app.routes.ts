import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AuthGuard } from './_guard/auth.service';


import { AuthHeaderComponent } from './common/auth-header.component';
import { AuthFooterComponent } from './common/auth-footer.component';
import { AuthNavComponent } from './common/auth-nav.component';

// admin pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildersComponent } from './admin/builders/builders.component';
import { BuilderDetailsComponent } from './admin/builder-details/builder-details.component';
import { PartnershipComponent } from './admin/partnership/partnership.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { ReportComponent } from './admin/report/report.component';

// Route Configuration
export const routes: Routes = [

	{ path: '', children:[

		{ path: '', redirectTo: '/dashboard', pathMatch: 'full',  canActivate: [AuthGuard] ,data:{title:'Home page'}},
		
	    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] , data:{title:'Dashboard'}},
	    { path: 'builders', component: BuildersComponent, canActivate: [AuthGuard] , data:{title:'Builders'}},
	    { path: 'builder/details/:id', component: BuilderDetailsComponent, canActivate: [AuthGuard] , data:{title:'Builders details'}},
	    { path: 'builder/partnership/:id', component: PartnershipComponent, canActivate: [AuthGuard] , data:{title:'Partnership details'}},
	    { path: 'payment/builder/:id', component: PaymentComponent, canActivate: [AuthGuard] , data:{title:'Builder payment report'}},
	    { path: 'report/builder/:id', component: ReportComponent, canActivate: [AuthGuard] , data:{title:'Builder report'}},
	    

	    { path: '' , component: AuthHeaderComponent, outlet: 'header'},
	    { path: '' , component: AuthNavComponent, outlet: 'navigation'},
	    { path: '' , component: AuthFooterComponent, outlet: 'footer'}
	]},

	


	{ path: 'auth', children:[

	    { path: 'login', component: LoginComponent , data:{title:'Login'}},
		{ path: 'signup', component: SignupComponent , data:{title:'Signup'}},
	    
	]},
	


	{ path: 'notfound', component: NotfoundComponent , data:{title:'404 Not Found'}},
	
	
	// otherwise redirect to notfound
    { path: '**', redirectTo: 'notfound'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);