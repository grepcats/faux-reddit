import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  posts: Post[];
  sortValue: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private router: Router
  ) { }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  clickedSort2(sortValue: string) {
    this.router.navigate(['list', sortValue])
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();

    this.route.params.forEach((urlParameters) => {
      this.sortValue = urlParameters['sortValue'];
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


  clickedSort(sortValue: string) {
    this.posts = this.postService.sortPosts(sortValue);
  }

}
