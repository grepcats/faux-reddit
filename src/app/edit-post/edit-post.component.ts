import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [ PostService ]
})
export class EditPostComponent implements OnInit {

  postId: string;
  postToEdit: Post;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });

    this.postService.getPostById(this.postId).subscribe(dataLastEmittedFromObserver => {
      this.postToEdit = dataLastEmittedFromObserver;
    });

  }

  doneEditing() {
    this.postService.updatePostInDb(this.postToEdit);
  }





}
