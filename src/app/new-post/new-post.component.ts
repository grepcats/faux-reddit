import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

let currentId: number = 5;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})

export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }


  submitForm(title: string, text: string) {
    let timestamp = new Date;
    let newPost: Post = new Post(currentId, title, text, 0, 0, timestamp);
    console.log(newPost);
    this.postService.addPost(newPost);
    currentId += 1;
    this.goHome();
  }

  goHome() {
    this.router.navigate(['']);
  }

}
