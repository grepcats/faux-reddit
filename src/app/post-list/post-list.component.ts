import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[] = [
    new Post("What do attributes do in c#?", "I'm working with Bluetooth and these seem to be used a lot there", 15, 5),
    new Post("Who started off as the hero, and lived long enough to become the villain?", "", 480, 10),
    new Post("Weekly FI Frugal Friday thread - March 30, 2018", "Please use this thread to discuss how amazingly cheap you are. How do you keep your costs low? How do become frugal without taking it to the extremes of frupidity? What costs have you realized could be cut from your life without pain? Use this weekly post to discuss Frugality in general. While the Rules for posting questions on the basics of personal finance/investing topics are more relaxed here, the rules against memes/spam/self-promotion/excessive rudeness/politics still apply!", 100, 10),
    new Post("Numbers Defined In An If Statement Don't Stay in My Class", "I cannot figure out how to make a history function on my basic calculator. Here is a basic version of it I am using for testing this and I cannot get it to work. In this version only * works. I am very sorry I just learned classes and this is a project I am using to test new things and I cant get it to work. Thanks In Advance! Code: https://code.sololearn.com/cdrRBFMenx6B/#cs", 35, 5)
  ]
  constructor() { }

  ngOnInit() {
  }

}
