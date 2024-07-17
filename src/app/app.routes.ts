import { Routes } from '@angular/router';

import { AuthOptionsComponent } from './features/auth/pages/auth-options/auth-options.component';
import { LoginComponent } from './features/auth/pages/login/login.component';

export const routes: Routes = [
    {
        path: "",
        component: AuthOptionsComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
];
