import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

// import { Router } from '@angular/router';
// import { PostService } from '../post.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() clickNew = new EventEmitter();

  goToNewPost() {
    this.router.navigate(['new']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
