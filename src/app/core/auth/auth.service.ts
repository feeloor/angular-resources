import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { LoggingService } from '../logging';
import { NotificationService } from '../notification';

export interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User | null>;

  constructor(
    private fireAuth: AngularFireAuth,
    private db: AngularFirestore,
    private logging: LoggingService,
    private notifyService: NotificationService
  ) {
    this.user = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get state(): Observable<firebase.User> {
    return this.fireAuth.authState;
  }

  signInGithub(): void {
    this.fireAuth.auth
      .signInWithPopup(new auth.GithubAuthProvider())
      .then(user => {
        const username = user.additionalUserInfo.username
          ? user.additionalUserInfo.username
          : user.user.email;
        const parsedUser = Object.assign({}, user.user, {
          displayName: username
        });

        this.notifyService.notify(`Welcome ${username}!`, 'success');
        this.logging.success(`Welcome ${username}!`);
        this.updateUser(parsedUser);
      })
      .catch(err => {
        this.notifyService.notify(`Failed to sign-in: ${err}`, 'error');
        this.logging.error(err);
      });
  }

  async updateUser(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.db.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || '',
      photoURL: user.photoURL || ''
    };
    await userRef.set(data);
  }

  async signOut() {
    await this.fireAuth.auth.signOut();
  }
}
