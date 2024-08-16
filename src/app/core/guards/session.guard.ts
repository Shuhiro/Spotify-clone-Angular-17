import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


export const sessionGuard: CanActivateFn = (route, state) => {
  try {
    const token: boolean = inject(CookieService).check('token');
    const router = inject(Router);
    
    if(!token){
      return router.navigate(['/','auth']);
    };
    return token;
  } catch (error) {
    console.log('Algo sucedio ?? ***',error);
    return false;
  }
};
