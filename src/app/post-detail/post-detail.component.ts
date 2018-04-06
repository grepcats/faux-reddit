import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {

  postId: number;
  postToDisplay: Post;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });

    // this.postToDisplay = this.postService.getPostById(this.postId);
  }

  clickedUpvote(postId: number) {
    this.postService.upvotePostById(postId);
  //  console.log(this.postService.getPostById(postId).upvotes)
  }

  clickedDownvote(postId: number) {
    this.postService.downvotePostById(postId);
    //console.log(this.postService.getPostById(postId).downvotes)
  }


}
