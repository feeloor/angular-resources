import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user.pipe(
      take(1),
      map(user => !!user)
    );
  }
}
