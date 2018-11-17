import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, AuthService } from '@app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User;
  subscriptions: Subscription[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const authSub = this.authService.user.subscribe(user => (this.user = user));
    this.subscriptions.push(authSub);
  }

  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      if (sub && sub.unsubscribe) {
        sub.unsubscribe();
      }
    }
  }
}
