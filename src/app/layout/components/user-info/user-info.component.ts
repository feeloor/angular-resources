import { Component, Input, OnInit } from '@angular/core';
import { AuthService, User } from '@app/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  signOut() {
    this.authService.signOut();
  }
}
