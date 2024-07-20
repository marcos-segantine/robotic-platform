import { Routes } from '@angular/router';

import { AuthOptionsComponent } from './features/auth/pages/auth-options/auth-options.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { MaintenanceComponent } from './core/components/pages/maintenance/maintenance.component';

export const routes: Routes = [
    {
        path: "",
        component: AuthOptionsComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "professor-auth",
        component: MaintenanceComponent
    },
    {
        path: "matrix-auth",
        component: MaintenanceComponent
    },
    {
        path: "institutional-auth",
        component: MaintenanceComponent
    },
];
