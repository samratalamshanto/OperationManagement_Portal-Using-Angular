import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate() {
    if (!this.authservice.hasToken()) {
      alert('Please need to login.....');
      this.router.navigate(['/login']);
      return false;
    } else if (this.authservice.isExpired()) {
      alert('Please need to login.....');
      this.router.navigate(['/login']);
      return false;
    } else if (!this.authservice.isLoggedIn()) {
      alert('Please need to login.....');
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
