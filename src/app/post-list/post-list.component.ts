import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  posts: Post[];
  constructor(private router: Router, private postService: PostService) { }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
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
