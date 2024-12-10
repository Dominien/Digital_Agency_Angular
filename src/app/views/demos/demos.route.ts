import { Routes } from '@angular/router'
import { DefaultComponent } from './default/default.component'
import { CreativeAgencyComponent } from './creative-agency/creative-agency.component'
import { DigitalAgencyComponent } from './digital-agency/digital-agency.component'
import { DesignAgencyComponent } from './design-agency/design-agency.component'
import { SEOAgencyComponent } from './seoagency/seoagency.component'
import { LandingProductComponent } from './landing-product/landing-product.component'
import { MobileShowCaseComponent } from './mobile-show-case/mobile-show-case.component'
import { FinanceConsultingComponent } from './finance-consulting/finance-consulting.component'

export const DEMO_ROUTE: Routes = [
  {
    path: 'classic',
    component: DefaultComponent,
    data: { title: 'Classic Default' },
  },
  {
    path: 'agency/creative',
    component: CreativeAgencyComponent,
    data: { title: 'Creative Agency' },
  },
  {
    path: 'agency/digital',
    component: DigitalAgencyComponent,
    data: { title: 'Digital Agency' },
  },
  {
    path: 'agency/design',
    component: DesignAgencyComponent,
    data: { title: 'Design Agency' },
  },
  {
    path: 'agency/seo',
    component: SEOAgencyComponent,
    data: { title: 'SEO Agency' },
  },
  {
    path: 'product-landing',
    component: LandingProductComponent,
    data: { title: 'Product Landing' },
  },
  {
    path: 'mobile-app',
    component: MobileShowCaseComponent,
    data: { title: 'Mobile Showcase' },
  },
  {
    path: 'finance-consulting',
    component: FinanceConsultingComponent,
    data: { title: 'Finance Consulting' },
  },
]
