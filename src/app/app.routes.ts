import { Routes } from '@angular/router';

import { AuthOptionsComponent } from './features/auth/pages/auth-options/auth-options.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AddActivityComponent } from './features/activities/pages/add-activity/add-activity.component';
import { ProfessionalDashboardComponent } from './features/dashboard/professional-dashboard/professional-dashboard.component';

import { MaintenanceComponent } from './core/components/pages/maintenance/maintenance.component';
import { CoreAppComponent } from './core/components/pages/core-app/core-app.component';

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
    {
        path: "app",
        component: CoreAppComponent,
        children:
            [
                {
                    path: "professional/home",
                    component: ProfessionalDashboardComponent
                },
                {
                    path: "professional/add-activity",
                    component: AddActivityComponent
                },
            ]
    },
];
