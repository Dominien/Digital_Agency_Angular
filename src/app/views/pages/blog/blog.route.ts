import { Route } from '@angular/router'
import { GridComponent } from './grid/grid.component'
import { ListSidebarComponent } from './list-sidebar/list-sidebar.component'
import { SingleV1Component } from './single-v1/single-v1.component'
import { SingleV2Component } from './single-v2/single-v2.component'

export const BLOG_ROUTES: Route[] = [
  {
    path: 'grid',
    component: GridComponent,
    data: { title: 'Blog Grid' },
  },
  {
    path: 'list-sidebar',
    component: ListSidebarComponent,
    data: { title: 'Blog List Sidebar' },
  },
  {
    path: 'single/v1',
    component: SingleV1Component,
    data: { title: 'Blog Single v.1' },
  },
  {
    path: 'single/v2',
    component: SingleV2Component,
    data: { title: 'Blog Single v.2' },
  },
]
