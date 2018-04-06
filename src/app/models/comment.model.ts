export class Comment {
  public upvotes: number = 0;
  public downvotes: number = 0;
  public score: number = 0;
  constructor(public text: string, public timestamp: Date){}

  updateScore() {
    this.score = this.upvotes - this.downvotes;
  }
}
