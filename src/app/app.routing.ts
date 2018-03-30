import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EditPostComponent } from './edit-post/edit-post.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
