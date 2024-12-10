import { Route } from '@angular/router'
import { AboutV1Component } from './about-v1/about-v1.component'
import { AboutV2Component } from './about-v2/about-v2.component'
import { AboutV3Component } from './about-v3/about-v3.component'

export const ABOUT_ROUTES: Route[] = [
  {
    path: 'v1',
    component: AboutV1Component,
    data: { title: 'About v.1' },
  },
  {
    path: 'v2',
    component: AboutV2Component,
    data: { title: 'About v.2' },
  },
  {
    path: 'v3',
    component: AboutV3Component,
    data: { title: 'About v.3' },
  },
]
