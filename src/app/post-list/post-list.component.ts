import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  posts: FirebaseListObservable<any[]>
  sortValue: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private router: Router
  ) { }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post) {
    // this.router.navigate(['posts', clickedPost.id]);
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.sortValue = urlParameters['sortValue'];
  //     console.log(this.sortValue)
  //     if (this.sortValue) {
  //       this.posts = this.postService.sortPosts(this.sortValue);
  //     } else {
  //       this.posts = this.postService.getPosts();
  //     }
    });
  }

  // clickedUpvote(postId: number) {
  //   this.postService.upvotePostById(postId);
  // }
  //
  // clickedDownvote(postId: number) {
  //   this.postService.downvotePostById(postId);
  // }
}
