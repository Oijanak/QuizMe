import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { inject } from '@angular/core';

export const normalGuard: CanActivateFn = (route, state) => {
  let login = inject(LoginService);
  let router = inject(Router);
  if (login.isLoggedIn() && login.getUserRole() === 'NORMAL') {
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};
