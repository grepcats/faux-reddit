import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Comment } from '../models/comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService, CommentService]
})
export class PostDetailComponent implements OnInit {

  postId: string;
  postToDisplay;
  comments;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private router: Router,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });

    this.postService.getPostById(this.postId).subscribe(dataLastEmittedFromObserver => {
      this.postToDisplay = dataLastEmittedFromObserver;
    });

    this.commentService.getCommentsByPostId(this.postId).subscribe(dataLastEmittedFromObserver => {
      this.comments = dataLastEmittedFromObserver;
    });
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
