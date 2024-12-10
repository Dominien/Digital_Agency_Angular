import { Route } from '@angular/router'
import { MasonryComponent } from './masonry/masonry.component'
import { ShowcaseComponent } from './showcase/showcase.component'
import { ListComponent } from './list/list.component'
import { CaseStudyV1Component } from './case-study-v1/case-study-v1.component'
import { CaseStudyV2Component } from './case-study-v2/case-study-v2.component'

export const PORTFOLIO_ROUTE: Route[] = [
  {
    path: 'masonry',
    component: MasonryComponent,
    data: { title: 'Portfolio Masonry' },
  },
  {
    path: 'showcase',
    component: ShowcaseComponent,
    data: { title: 'Portfolio Showcase' },
  },
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'Portfolio List' },
  },
  {
    path: 'case-study/v1',
    component: CaseStudyV1Component,
    data: { title: 'Case Study v.1' },
  },
  {
    path: 'case-study/v2',
    component: CaseStudyV2Component,
    data: { title: 'Case Study v.2' },
  },
]
