import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { SubredditListComponent } from './subreddit-list/subreddit-list.component';
import { SubredditDetailComponent } from './subreddit-detail/subreddit-detail.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    EditPostComponent,
    NewPostComponent,
    SideBarComponent,
    NewCommentComponent,
    SubredditListComponent,
    SubredditDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
