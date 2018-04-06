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

  posts;
  sortValue: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private router: Router
  ) { }


  goToDetailPage(clickedPost) {
    // this.router.navigate(['posts', clickedPost.id]);
    this.router.navigate(['posts', clickedPost.$key])
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.sortValue = urlParameters['sortValue'];
    });
    if (!this.sortValue) {
      this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
        this.posts = dataLastEmittedFromObserver.reverse();
        this.posts.forEach(function(post){
          post.serverTimestamp = new Date(post.serverTimestamp).toString();
        });
      });
    } else {
      this.postService.sortPosts(this.sortValue).subscribe(dataLastEmittedFromObserver => {
        this.posts = dataLastEmittedFromObserver.reverse();
        this.posts.forEach(function(post){
          post.serverTimestamp = new Date(post.serverTimestamp).toString();
        });
        if (this.sortValue === 'top') {
          let today = this.postService.today;
          let filteredResults: string[] = [];
          this.posts.forEach(function(post) {
            if ((today-post.serverTimestamp)/3600000 <= 24) {
              filteredResults.push(post)
            }
          });
          this.posts = filteredResulst;
        }
        this.posts = this.postService.today;
      });

      //     let timeElapsed = today-postTimestamp
      //     if (timeElapsed/3600000 <= 24) {
      //       topPosts.push(POSTS[i])
      //     }
  }

  // clickedUpvote(postId: number) {
  //   this.postService.upvotePostById(postId);
  // }
  //
  // clickedDownvote(postId: number) {
  //   this.postService.downvotePostById(postId);
  // }
}
