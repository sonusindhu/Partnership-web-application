import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guard/auth.service';


import { AuthHeaderComponent } from './common/auth-header.component';
import { AuthFooterComponent } from './common/auth-footer.component';
import { AuthNavComponent } from './common/auth-nav.component';

// Route Configuration
export const routes: Routes = [

	{ path: 'admin', children:[
	    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] , data:{title:'Dashboard | Online Course Enrollment System'}},
	    

	    { path: '' , component: AuthHeaderComponent, outlet: 'header'},
	    { path: '' , component: AuthNavComponent, outlet: 'navigation'},
	    { path: '' , component: AuthFooterComponent, outlet: 'footer'}
	]},

	{ path: '', component: HomeComponent, pathMatch: 'full', data:{title:'Online Course Enrollment System'}},
	{ path: 'login', component: LoginComponent , data:{title:'Login | Online Course Enrollment System'}},
	{ path: 'signup', component: SignupComponent , data:{title:'Signup | Online Course Enrollment System'}},


	{ path: 'notfound', component: NotfoundComponent , data:{title:'404 Not Found'}},
	
	// user login
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] , data:{title:'Dashboard | Online Course Enrollment System'}},
	
	// otherwise redirect to notfound
    { path: '**', redirectTo: 'notfound'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);