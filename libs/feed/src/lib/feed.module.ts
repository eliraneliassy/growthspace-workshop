import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { feedRoutes } from './lib.routes';
import { FeedComponent } from './feed/feed.component';
import { BookComponentModule } from '@growthspace/book';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(feedRoutes), BookComponentModule],
  declarations: [FeedComponent],
})
export class FeedModule {}
