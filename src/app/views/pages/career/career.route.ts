import { Route } from '@angular/router'
import { CareerComponent } from './career/career.component'
import { CareerSingleComponent } from './career-single/career-single.component'

export const CAREER_ROUTES: Route[] = [
  {
    path: '',
    component: CareerComponent,
    data: { title: 'Career' },
  },
  {
    path: 'single',
    component: CareerSingleComponent,
    data: { title: 'Career Single' },
  },
]
