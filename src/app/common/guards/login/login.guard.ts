import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';

export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const sharedService = inject(SharedService)
  const path = route.routeConfig?.path;

  if(sharedService.isLoggedInUserAdmin())
  {
    router.navigate(['/admin'])
    return false;
  }
  else if(sharedService.isLoggedInUserNonAdmin())
  {
    router.navigate(['/user'])
    return false;
  }
  else
  {
    return true;
  }
};
