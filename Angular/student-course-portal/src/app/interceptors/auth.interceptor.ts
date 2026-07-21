import { HttpInterceptorFn } from '@angular/common/http';

// HOL 8: Auth interceptor — adds Authorization header to every HTTP request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345',
    },
  });
  return next(authReq);
};
