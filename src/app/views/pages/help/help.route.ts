import { Route } from '@angular/router'
import { CenterComponent } from './center/center.component'
import { CenterDetailComponent } from './center-detail/center-detail.component'

export const HELP_ROUTES: Route[] = [
  {
    path: 'center',
    component: CenterComponent,
    data: { title: 'Help Center' },
  },
  {
    path: 'detail',
    component: CenterDetailComponent,
    data: { title: 'Help Detail' },
  },
]
