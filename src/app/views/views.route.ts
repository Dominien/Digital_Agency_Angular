import { Route } from '@angular/router'

export const VIEW_ROUTES: Route[] = [
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.route').then((mod) => mod.DEMO_ROUTE),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.route').then((mod) => mod.ABOUT_ROUTES),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/service.route').then(
        (mod) => mod.SERVICE_ROUTES
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./pages/customer/customer.route').then(
        (mod) => mod.CUSTOMER_ROUTES
      ),
  },
  {
    path: 'career',
    loadChildren: () =>
      import('./pages/career/career.route').then((mod) => mod.CAREER_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.route').then((mod) => mod.CONTACT_ROUTES),
  },
  {
    path: 'saas',
    loadChildren: () =>
      import('./pages/saas/saas.route').then((mod) => mod.SAAS_ROUTES),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help.route').then((mod) => mod.HELP_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/other-pages/other-page.route').then(
        (mod) => mod.OTHER_PAGE_ROUTES
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.route').then((mod) => mod.PORTFOLIO_ROUTE),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
]
