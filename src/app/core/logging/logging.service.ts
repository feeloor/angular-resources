import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor() {}

  success(msg: string): void {
    if (!environment.production) {
      console.log(msg);
    }
  }

  info(msg: string): void {
    if (!environment.production) {
      console.log(msg);
    }
  }
  error(msg: string): void {
    if (!environment.production) {
      console.error(msg);
    }
  }
}
