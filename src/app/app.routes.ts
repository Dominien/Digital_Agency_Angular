import { RedirectCommand, Router, Routes, type UrlTree } from '@angular/router'
import { UseLayoutComponent } from './layouts/use-layout/use-layout.component'
import { ShopLayoutComponent } from './layouts/shop-layout/shop-layout.component'
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component'
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component'
import { AuthService } from './core/services/auth-service.service'
import { inject } from '@angular/core'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demos/classic',
    pathMatch: 'full',
  },
  {
    path: '',
    component: UseLayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEW_ROUTES),
  },
  {
    path: 'shop',
    component: ShopLayoutComponent,

    loadChildren: () =>
      import('./views/pages/shop/shop.route').then((mod) => mod.SHOP_ROUTES),
  },
  {
    path: 'blog',
    component: BlogLayoutComponent,
    loadChildren: () =>
      import('./views/pages/blog/blog.route').then((mod) => mod.BLOG_ROUTES),
  },
  {
    path: 'account',
    component: AccountLayoutComponent,
    canActivate: [
      () => {
        const currentUser = inject(AuthService).session
        const router: Router = inject(Router)
        console.log(router)
        if (currentUser) return true
        const urlTree: UrlTree = router.parseUrl('/auth/sign-in')
        return new RedirectCommand(urlTree, { skipLocationChange: true })
      },
    ],
    loadChildren: () =>
      import('./views/account/account.route').then((mod) => mod.ACCOUNT_ROUTES),
  },
]
