import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CommentService {

  constructor(private database: AngularFireDatabase) { }

  addComment(newComment: Comment, postId: string){
    this.database.list(`comments/${postId}`).push(newComment);
  }

  getCommentsByPostId(postId: string) {
    return this.database.list(`comments/${postId}`)
  }

}
