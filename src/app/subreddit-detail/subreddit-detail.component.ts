import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PostService } from '../post.service'

@Component({
  selector: 'app-subreddit-detail',
  templateUrl: './subreddit-detail.component.html',
  styleUrls: ['./subreddit-detail.component.css'],
  providers: [SubredditService, PostService]
})
export class SubredditDetailComponent implements OnInit {
  posts;
  subTitle;

  constructor(private subredditService: SubredditService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subTitle = urlParameters['subTitle'];
    });

    this.postService.getPostsBySubTitle(this.subTitle).subscribe(dataLastEmittedFromObserver => {
      this.posts = dataLastEmittedFromObserver;
    });
    console.log(this.subTitle);
  }

}
