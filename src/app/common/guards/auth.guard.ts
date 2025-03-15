import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const path = route.routeConfig?.path;
  const token = localStorage.getItem('token');

  if(token != null)
  {

  }

  return true;
};

const isLoggedInUserAdmin = (token : string) : boolean => {
  let result = false;

  if(token != null)
  {
    let tokenFirstPartText = atob(token.split('.')[1]);
    let obj = JSON.parse(tokenFirstPartText);
    let role = obj["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    result = role === 'Admin' ? true : false;
  }

  return result;
}
