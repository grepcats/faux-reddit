import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SubredditDetailComponent } from './subreddit-detail/subreddit-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'posts/:id/edit',
    component: EditPostComponent
  },
  {
    path: 'new',
    component: NewPostComponent
  },
  {
    path: 'list/:sortValue',
    component: PostListComponent
  },
  {
    path: 'subreddits/:subId',
    component: SubredditDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
