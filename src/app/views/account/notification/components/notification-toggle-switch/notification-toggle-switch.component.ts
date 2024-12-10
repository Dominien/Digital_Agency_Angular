import { Component, Input } from '@angular/core'

@Component({
  selector: 'notification-toggle-switch',
  standalone: true,
  imports: [],
  templateUrl: './notification-toggle-switch.component.html',
  styles: ``,
})
export class NotificationToggleSwitchComponent {
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() defaultChecked: boolean = false
}
