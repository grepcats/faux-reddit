import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS.sort(compareScore).reverse();
  }

  getPostById(postId: number) {
    for (let i = 0; i < POSTS.length; i++) {
        if (POSTS[i].id === postId) {
          return POSTS[i];
        }
    }
  }

  addPost(newPost: Post) {
    POSTS.push(newPost);
  }

  upvotePostById(postId: number) {
    let upvotedPost: Post = this.getPostById(postId);
    upvotedPost.upvotes++;
    upvotedPost.updateScore();
  }

  downvotePostById(postId: number) {
    let downvotedPost: Post = this.getPostById(postId);
    downvotedPost.downvotes++;
    downvotedPost.updateScore();
  }

}

function compareScore(a,b) {
 if (a.score < b.score)
   return -1;
 if (a.score > b.score)
   return 1;
 return 0;
}
