import { VoteType } from './vote-type';
import { ResourceType } from './resource-type';
import { ResourceLevel } from './resource-level';
import { Vote } from './vote';

export class Resource {
  id?: string;
  name: string;
  description: string;
  votes: Vote[];
  calculatedVotes?: number;
  link: string;
  type: ResourceType;
  level: ResourceLevel;
  enabled?: boolean;

  constructor(resource: Partial<Resource>) {
    Object.assign(this, resource, {
      type: ResourceType[resource.type],
      level: ResourceLevel[resource.level],
      votes: resource.votes ? [
        ...resource.votes.map(vote => new Vote(vote))
      ] : [],
      calculatedVotes: resource.votes && resource.votes.length > 0
        ? this.calculateVotes(resource.votes)
        : 0
    });
  }

  calculateVotes(rVotes: Vote[]): number {
    let votes = 0;
    rVotes.forEach((v) =>
      votes = v.voteType === VoteType.Up ? votes + 1 : votes - 1);
    return votes;
  }
}
