import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  subredditPosts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts() {
    this.posts = this.database.list(`posts`, {query: {orderByChild: 'score'}});
    return this.posts;

  }

  sortPosts(sortValue: string) {
    switch(sortValue) {
      case 'new':
        this.posts = this.database.list(`posts`, {query: {orderByChild: 'serverTimestamp'}});
        return this.posts;
      case 'top':
        this.posts = this.database.list(`posts`, {query: {orderByChild: 'score', limitToFirst: 2}});
        return this.posts;

    }
  }

  getPostById(postId: string) {
    return this.database.object('posts/' + postId);
  }

  addPost(newPost: Post) {
    newPost.serverTimestamp = firebase.database.ServerValue.TIMESTAMP;
    let subredditId = 
    this.posts.push(newPost);
    this.database.list(`posts/${subredditId}`).push(newPost);
  }

  updatePostInDb(localUpdatedPost) {
    let postEntryInFirebase = this.getPostById(localUpdatedPost.$key)
    postEntryInFirebase.update({upvotes: localUpdatedPost.upvotes,
                                downvotes: localUpdatedPost.downvotes,
                                score: localUpdatedPost.score,
                                title: localUpdatedPost.title,
                                postText: localUpdatedPost.postText
                              })

  }

}
