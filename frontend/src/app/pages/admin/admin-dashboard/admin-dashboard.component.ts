import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../../profile/profile.component';
import { AdminhomeComponent } from '../adminhome/adminhome.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterModule,
    ProfileComponent,
    AdminhomeComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {}
