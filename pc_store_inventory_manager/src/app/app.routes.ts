import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { ComputerFormComponent } from './computer-form/computer-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'computer',
        component: ComputerListComponent
    },
    {
        path: 'computer-add',
        component: ComputerFormComponent,
        canActivate: [() => inject(AuthService).preventGuestAccess()]
    },
    {
        path: 'computer-edit/:id',
        component: ComputerFormComponent,
        canActivate: [() => inject(AuthService).preventGuestAccess()]
    },
    {
        path: 'customer',
        component: CustomerListComponent,
        canActivate: [() => inject(AuthService).preventGuestAccess()]
    },
    {
        path: 'customer-add',
        component: CustomerFormComponent
    },
    {
        path: 'customer-edit/:id',
        component: CustomerFormComponent,
        canActivate: [() => inject(AuthService).preventGuestAccess()]
    },
    {
        path: 'purchase',
        component: PurchaseListComponent,
        canActivate: [() => inject(AuthService).preventGuestAccess()]
    },
    {
        path: 'purchase-add',
        component: PurchaseFormComponent
    },
    {
        path: 'purchase-edit/:id',
        component: PurchaseFormComponent,
        canActivate: [() => inject(AuthService).preventGuestAccess()]
    }
];
