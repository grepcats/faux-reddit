import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { POSTS } from './mock-posts';

const today = new Date;
@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS.sort(compareScore).reverse();
  }

  sortPosts(sortValue: string) {
    switch(sortValue) {
      case 'new':
        return POSTS.sort(compareTimestamp).reverse();
      case 'top':
      for (let i = 0; i < POSTS.length; i++) {
        let timePassage = today - POSTS[i].timestamp);

        if((today - POSTS[i].timestamp)/1000/60/60 <= 24 )
      }
        return POSTS.sort(compareScore).reverse();
    }
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

function compareTimestamp(a,b) {
 if (a.timestamp < b.timestamp)
   return -1;
 if (a.timestamp > b.timestamp)
   return 1;
 return 0;
}

function compareUpvotes(a,b) {
 if (a.upvotes < b.upvotes)
   return -1;
 if (a.upvotes > b.upvotes)
   return 1;
 return 0;
}
