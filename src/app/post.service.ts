import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

let today = +new Date();
@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts() {
    //return POSTS.sort(compareScore).reverse();
    console.log(this.posts)
    this.posts = this.database.list(`posts`, {query: {orderByChild: 'score'}});

    return this.posts;

  }

  sortPosts(sortValue: string) {
    switch(sortValue) {
      case 'new':
      this.posts = this.database.list(`posts`, {query: {orderByChild: 'serverTimestamp'}});
      return this.posts;
    }
    // let topPosts: Post[] = [];
    // switch(sortValue) {
    //   case 'new':
    //   console.log(POSTS.sort(compareTimestamp).reverse())
    //     return POSTS.sort(compareTimestamp).reverse();
    //   case 'top':
    //   for (let i = 0; i < POSTS.length; i++) {
    //     let postTimestamp = +new Date(POSTS[i].timestamp);
    //     let timeElapsed = today-postTimestamp
    //     if (timeElapsed/3600000 <= 24) {
    //       topPosts.push(POSTS[i])
    //     }
    //   }
    //   return topPosts.sort(compareScore).reverse();
    // }
  }

  getPostById(postId: string) {
    return this.database.object('posts/' + postId);
  }

  addPost(newPost: Post) {
    //POSTS.push(newPost);
    newPost.serverTimestamp = firebase.database.ServerValue.TIMESTAMP;
    this.posts.push(newPost);
  }

  upvotePostById(postId: number) {
    // let upvotedPost: Post = this.getPostById(postId);
    // upvotedPost.upvotes++;
    // upvotedPost.updateScore();
  }

  downvotePostById(postId: number) {
    // let downvotedPost: Post = this.getPostById(postId);
    // downvotedPost.downvotes++;
    // downvotedPost.updateScore();
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
