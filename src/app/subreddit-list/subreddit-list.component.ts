import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Location } from '@angular/common';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.css'],
  providers: [PostService, SubredditService]
})
export class SubredditListComponent implements OnInit {

  constructor(private postService: PostService, private subredditService: SubredditService) { }

  ngOnInit() {
  }

}
