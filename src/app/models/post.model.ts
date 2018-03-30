export class Post {
  public postedTo: string = "all";
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
}
