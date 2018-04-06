import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subreddit-detail',
  templateUrl: './subreddit-detail.component.html',
  styleUrls: ['./subreddit-detail.component.css'],
  providers: [SubredditService]
})
export class SubredditDetailComponent implements OnInit {
  posts;
  subredditId;

  constructor(private subredditService: SubredditService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subredditId = urlParameters['subId'];
    });

  //   this.subredditService.getPostsBySubId(this.subredditId).subscribe(dataLastEmittedFromObserver => {
  //     this.posts = dataLastEmittedFromObserver;
  //
  // }

}
