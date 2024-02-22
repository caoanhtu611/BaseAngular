import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let check = localStorage.getItem('token');
  if (!check) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
