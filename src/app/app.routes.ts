import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [  
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'product', component: ProductComponent}];
>>>>>>> master
