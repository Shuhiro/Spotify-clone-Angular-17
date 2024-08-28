import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {

  const cookiesService = inject(CookieService);

  try {

    const token = cookiesService.get('token');
    const authToken = 'TOKEN';

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
  } catch (error) {
    console.log('error ',error);
    return next(req)
  }
};
