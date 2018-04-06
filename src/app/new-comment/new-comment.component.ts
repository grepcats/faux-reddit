import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
  providers: [CommentService]
})
export class NewCommentComponent implements OnInit {
  postId: string;

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.postId = urlParameters['id'];
  });
  }

  addComment(commentText: string) {
    let timestamp = new Date;
    this.commentService.addComment((new Comment(commentText, timestamp.toString())), this.postId)
  }

}
