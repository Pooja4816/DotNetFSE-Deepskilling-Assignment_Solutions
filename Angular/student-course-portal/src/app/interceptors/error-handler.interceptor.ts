import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

// HOL 8: Global error interceptor — handles 401 and 500 HTTP errors
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.warn('Unauthorized — redirecting to home');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server error — please try again later');
      }
      return throwError(() => error);
    })
  );
};
