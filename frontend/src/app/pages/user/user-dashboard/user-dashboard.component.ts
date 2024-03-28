import { Component } from '@angular/core';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';
import { RouterModule } from '@angular/router';
import { LoadQuizesComponent } from '../load-quizes/load-quizes.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [UserSidebarComponent, RouterModule, LoadQuizesComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {}
