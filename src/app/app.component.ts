import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './post.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title = 'faux reddit';
  subreddits;
  subredditId;

  constructor(private router: Router){}

  clickedSort(sortValue: string) {
    this.router.navigate(['list', sortValue]);
  }

}
