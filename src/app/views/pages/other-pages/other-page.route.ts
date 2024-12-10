import { Route } from '@angular/router'
import { TeamComponent } from './team/team.component'
import { FaqComponent } from './faq/faq.component'
import { PricingComponent } from './pricing/pricing.component'
import { Error404Component } from './error-404/error-404.component'
import { ComingSoonComponent } from './coming-soon/coming-soon.component'
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component'

export const OTHER_PAGE_ROUTES: Route[] = [
  {
    path: 'team',
    component: TeamComponent,
    data: { title: 'Team' },
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: { title: 'Pricing' },
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { title: 'FAQs' },
  },
  {
    path: 'error-404',
    component: Error404Component,
    data: { title: 'Page Not Found' },
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
    data: { title: 'Comming Soon' },
  },
  {
    path: 'terms-conditions',
    component: TermsAndConditionComponent,
    data: { title: 'Terms & Condition' },
  },
]
