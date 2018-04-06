import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './post.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { SubredditService } from './subreddit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService, SubredditService]
})
export class AppComponent {
  title = 'faux reddit';
  subreddits;
  subredditId;

  constructor(private router: Router, private subredditService: SubredditService){}

  ngOnInit() {
    this.subredditService.getSubreddits().subscribe(dataLastEmittedFromObserver => {
      this.subreddits = dataLastEmittedFromObserver;
    });
  }

  clickedSort(sortValue: string) {
    this.router.navigate(['list', sortValue]);
  }

  goToSubreddit(subreddit) {
    this.router.navigate(['subreddits', subreddit.$key])
  }

}
