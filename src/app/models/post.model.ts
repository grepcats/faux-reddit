import { Comment } from './comment.model';

export class Post {
  public postedTo: string = "all";
  public allComments: Comment[] = [];
  public score: number = this.upvotes-this.downvotes;
  public serverTimestamp;
  constructor(
    public title: string,
    public postText: string,
    public upvotes: number,
    public downvotes: number,
  ){}

    updateScore() {
      this.score = this.upvotes - this.downvotes;
    }

}
