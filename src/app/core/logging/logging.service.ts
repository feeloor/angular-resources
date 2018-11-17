import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor() {}

  success(msg: string): void {
    console.log(msg);
  }

  info(msg: string): void {
    console.log(msg);
  }
  error(msg: string): void {
    console.error(msg);
  }
}
