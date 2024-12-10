import { Route } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { SecurityComponent } from './security/security.component'
import { NotificationComponent } from './notification/notification.component'
import { ProjectsComponent } from './projects/projects.component'
import { PaymentDetailsComponent } from './payment-details/payment-details.component'
import { OrderHistoryComponent } from './order-history/order-history.component'
import { WishlistComponent } from './wishlist/wishlist.component'
import { DeleteProfileComponent } from './delete-profile/delete-profile.component'

export const ACCOUNT_ROUTES: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile' },
  },
  {
    path: 'security',
    component: SecurityComponent,
    data: { title: 'Security' },
  },
  {
    path: 'notifications',
    component: NotificationComponent,
    data: { title: 'Notifications' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'My Projects' },
  },
  {
    path: 'payment-details',
    component: PaymentDetailsComponent,
    data: { title: 'Payment Detail' },
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    data: { title: 'Order History' },
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    data: { title: 'Wishlist' },
  },
  {
    path: 'delete-profile',
    component: DeleteProfileComponent,
    data: { title: 'Delete Profile' },
  },
]
