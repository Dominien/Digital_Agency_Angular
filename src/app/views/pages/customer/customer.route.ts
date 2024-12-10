import { Route } from '@angular/router'
import { CustomerStoriesComponent } from './customer-stories/customer-stories.component'
import { CustomerStorySingleComponent } from './customer-story-single/customer-story-single.component'

export const CUSTOMER_ROUTES: Route[] = [
  {
    path: 'stories',
    component: CustomerStoriesComponent,
    data: { title: 'Customer Stories' },
  },
  {
    path: 'story-single',
    component: CustomerStorySingleComponent,
    data: { title: 'Customer Stories Single' },
  },
]
