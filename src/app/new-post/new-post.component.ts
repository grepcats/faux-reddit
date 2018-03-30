import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';

let currentId: number = 5;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})

export class NewPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }


  submitForm(title: string, text: string) {
    let newPost: Post = new Post(currentId, title, text, 0, 0);
    console.log(newPost);
    this.postService.addPost(newPost);
    currentId += 1;
  }

}
