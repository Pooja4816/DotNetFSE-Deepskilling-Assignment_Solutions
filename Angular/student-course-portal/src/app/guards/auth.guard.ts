import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// HOL 7 Step 75: CanActivate guard — protects /profile and /enroll routes
// Returns true if user is logged in; navigates to '/' and returns false otherwise
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
