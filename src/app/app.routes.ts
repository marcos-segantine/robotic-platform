import { Routes } from '@angular/router';

import { AuthOptionsComponent } from './features/auth/pages/auth-options/auth-options.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AddActivityComponent } from './features/activities/pages/add-activity/add-activity.component';
import { ProfessionalDashboardComponent } from './features/dashboard/pages/professional-dashboard/professional-dashboard.component';
import { StudentActivityComponent } from './features/activities/pages/student-activity/student-activity.component';
import { StudentDashboardComponent } from './features/dashboard/pages/student-dashboard/student-dashboard.component';
import { StudentLessonsComponent } from './features/activities/pages/student-lessons/student-lessons.component';
import { StudentLessonComponent } from './features/activities/pages/student-lesson/student-lesson.component';
import { StudentQuizComponent } from './features/activities/pages/student-quiz/student-quiz.component';
import { InstitutionDashboardComponent } from './features/dashboard/pages/institution-dashboard/institution-dashboard.component';
import { StudentProfileComponent } from './features/profiles/pages/student-profile/student-profile.component';
import { ProfessorAboutComponent } from './features/profiles/pages/professor-about/professor-about.component';
import { InstitutionalActivityComponent } from './features/activities/pages/institutional-activity/institutional-activity.component';
import { InstitutionalActivityDetailsComponent } from './features/activities/pages/institutional-activity-details/institutional-activity-details.component';
import { GlobalRankingComponent } from './features/award/pages/global-ranking/global-ranking.component';

import { MaintenanceComponent } from './core/components/pages/maintenance/maintenance.component';
import { CoreAppComponent } from './core/components/pages/core-app/core-app.component';
import { SupportComponent } from './shared/pages/support/support.component';

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
        path: "institution-auth",
        component: MaintenanceComponent
    },
    {
        path: "app",
        component: CoreAppComponent,
        children:
            [
                {
                    path: "student/home",
                    component: StudentDashboardComponent
                },
                {
                    path: "student/activity",
                    component: StudentActivityComponent
                },
                {
                    path: "student/activity/lessons",
                    component: StudentLessonsComponent
                },
                {
                    path: "student/activity/lessons/lesson",
                    component: StudentLessonComponent
                },
                {
                    path: "student/activity/lessons/lesson/quiz",
                    component: StudentQuizComponent
                },
                {
                    path: "student/professor",
                    component: ProfessorAboutComponent
                },
                {
                    path: "student/profile",
                    component: StudentProfileComponent
                },
                {
                    path: "professional/home",
                    component: ProfessionalDashboardComponent
                },
                {
                    path: "professional/activity",
                    component: AddActivityComponent
                },
                {
                    path: "institution/home",
                    component: InstitutionDashboardComponent
                },
                {
                    path: "institution/activity",
                    component: InstitutionalActivityComponent
                },
                {
                    path: "institution/activity/lesson",
                    component: InstitutionalActivityDetailsComponent
                },
                {
                    path: ":userType/support",
                    component: SupportComponent
                },
                {
                    path: ":userType/ranking",
                    component: GlobalRankingComponent
                },
            ]
    },
];
