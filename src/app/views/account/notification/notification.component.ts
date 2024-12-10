import { Component } from '@angular/core'
import { PageHeadingComponent } from '../components/page-heading/page-heading.component'
import { NotificationToggleSwitchComponent } from './components/notification-toggle-switch/notification-toggle-switch.component'

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [PageHeadingComponent, NotificationToggleSwitchComponent],
  templateUrl: './notification.component.html',
  styles: ``,
})
export class NotificationComponent {}
