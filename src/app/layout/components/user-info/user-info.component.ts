import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, User } from '@app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  user: User;
  subscriptions: Subscription[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const authSub = this.authService.user.subscribe((user) => this.user = user);
    this.subscriptions.push(authSub);
  }

  signOut() {
    this.authService.signOut();
  }

  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      if (sub && sub.unsubscribe) {
        sub.unsubscribe();
      }
    }
  }
}
