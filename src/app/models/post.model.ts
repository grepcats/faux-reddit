export class Post {
  public postedTo: string = "all";
  public score: number = this.upvotes-this.downvotes;
  public serverTimestamp;
  constructor(
    public title: string,
    public postText: string,
    public upvotes: number,
    public downvotes: number,
  ){}

}
