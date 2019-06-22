import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { AuthService, User } from '@app/core';
import { ResourceActions, RootStoreState } from '@app/root-store';
import { Store } from '@ngrx/store';
import { Resource, Vote, VoteType } from '../../models';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteComponent implements OnInit {
  @Input()
  resource: Resource;
  @Input()
  user: User;

  constructor(
    private authService: AuthService,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() { }

  async vote(resource: Resource, vote: 'up' | 'down') {
    if (!this.user) {
      return;
    }

    const newVote: Vote = {
      userId: this.user.uid,
      voteType: vote === 'up' ? VoteType.Up : VoteType.Down
    };

    let allVotes = [...resource.votes, newVote];

    const existingVote = resource.votes.find(v => v.userId === this.user.uid);
    if (existingVote) {
      const voted = vote === 'up' ? VoteType.Up : VoteType.Down;
      if (existingVote.voteType === voted) {
        resource.votes.splice(
          resource.votes.findIndex(v => v.userId === this.user.uid),
          1
        );
      }

      existingVote.voteType = voted;
      allVotes = [...resource.votes];
    }

    this.store$.dispatch(
      new ResourceActions.ResourceCollectionActions.VoteResourceAction({
        resourceId: resource.id,
        allVotes
      })
    );
  }

  hasVoted(user: User, resource: Resource, voted: 'up' | 'down'): boolean {
    if (!user || !user.uid) {
      return false;
    }

    if (resource.votes.length === 0) {
      return false;
    }

    const myVote = resource.votes.find(v => v.userId === user.uid);
    if (myVote) {
      return myVote.voteType === (voted === 'up' ? VoteType.Up : VoteType.Down);
    }

    return false;
  }

  signIn(): void {
    this.authService.signInGithub();
  }
}
