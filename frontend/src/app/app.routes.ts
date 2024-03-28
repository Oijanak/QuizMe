import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionComponent } from './pages/admin/view-quiz-question/view-quiz-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { normalGuard } from './services/normal.guard';
import { LoadQuizesComponent } from './pages/user/load-quizes/load-quizes.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';

export const routes: Routes = [
  {
    path: 'signup',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,

    canActivate: [adminGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },

      {
        path: '',
        component: AdminhomeComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'view-quiz',
        component: ViewQuizComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'update-quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path: 'view-questions/:id/:title',
        component: ViewQuizQuestionComponent,
      },
      {
        path: 'add-question/:id/:title',
        component: AddQuestionComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,

    canActivate: [normalGuard],
    children: [
      {
        path: ':catId',
        component: LoadQuizesComponent,
      },
      {
        path: 'user/profile',
        component: ProfileComponent,
      },
      {
        path: 'instruction/:qid',
        component: InstructionComponent,
      },
    ],
  },
];
