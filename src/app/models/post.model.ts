import { Comment } from './comment.model';

export class Post {
  public postedTo: string = "all";
  public allComments: Comment[] = [];
  public score: number = this.upvotes-this.downvotes;
  constructor(
    public id: number,
    public title: string,
    public postText: string,
    public upvotes: number,
    public downvotes: number){}

    updateScore() {
      this.score = this.upvotes - this.downvotes;
    }

    addComment(commentText: string) {
      let timestamp = new Date;
      let newComment = new Comment(this.id, commentText, timestamp);
      this.allComments.push(newComment);
      console.log(this.allComments);
    }
}
