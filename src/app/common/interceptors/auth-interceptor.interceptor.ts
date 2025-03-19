import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authService = inject(AuthService)
  const toastr = inject(ToastrService)
  
  return next(req).pipe(
    catchError((error) => {
      if(error.status === 401)
      {
        authService.logout();
        toastr.warning('Session Expired. Please login again');
      }
      return throwError(() => error);
    })
  );
};
