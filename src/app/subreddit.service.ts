import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class SubredditService {
  subreddits: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) { }

  getSubreddits() {
    this.subreddits = this.database.list(`subreddits`);
    return this.subreddits;
  }

  getSubredditById(subredditId: string) {
    return this.database.object('subreddits/' + subredditId);
  }

}
