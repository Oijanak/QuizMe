import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };
  constructor(
    private snackbar: MatSnackBar,
    private loginService: LoginService,
    private route: Router
  ) {
    this.loginService.logout();
  }
  formLogin() {
    if (this.user.username === '' && this.user.password === '') {
      this.snackbar.open('Username password required', '', {
        duration: 3000,
      });
      return;
    }
    this.loginService.generateToken(this.user).subscribe(
      (data: any) => {
        console.log('successs', data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user): any => {
          this.loginService.setUser(user);
          console.log(user);
          if (this.loginService.getUserRole() === 'ADMIN') {
            this.loginService.loginStatusSubject.next(true);
            this.route.navigateByUrl('/admin');
          } else if (this.loginService.getUserRole() === 'NORMAL') {
            this.loginService.loginStatusSubject.next(true);
            this.route.navigateByUrl('/user-dashboard/0');
          } else {
            this.loginService.logout();
          }
        });
      },
      (error) => {
        console.log('Error', error);
      }
    );
    console.log('Submitted');
  }
}
