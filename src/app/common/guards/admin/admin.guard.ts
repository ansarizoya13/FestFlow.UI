import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const sharedService = inject(SharedService)

  if(sharedService.isLoggedInUserAdmin())
    return true;
  else
  {
    router.navigate(['/user'])
    return false;
  }
};
