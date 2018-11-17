import { VoteType } from './vote-type';

export class Vote {
  userId: string;
  voteType: VoteType;

  constructor(vote: Vote) {
    Object.assign(this, vote);
  }
}
