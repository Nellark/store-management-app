import { Routes } from '@angular/router';
import { ProductFormComponent } from './Pages/product-form/product-form.component';
import { SupplierFormComponent } from './Pages/supplier-form/supplier-form.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [

    { path: '', component: DashboardComponent},
    { path: 'products', component: ProductFormComponent},
    { path: 'suppliers', component: SupplierFormComponent },
   
    
  ];


  
