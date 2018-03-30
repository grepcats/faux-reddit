export class Post {
  public postedTo: string = "all";
  constructor(public title: string, public postText: string, public upvotes: number, public downvotes: number){}
}
