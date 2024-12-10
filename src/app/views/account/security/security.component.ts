import { Component } from '@angular/core'
import { PageHeadingComponent } from '../components/page-heading/page-heading.component'
import { SecuritySettingCardComponent } from './components/security-setting-card/security-setting-card.component'
import { LinkedAccountComponent } from './components/linked-account/linked-account.component'
import { SocialMediaComponent } from './components/social-media/social-media.component'
import { DevicesComponent } from './components/devices/devices.component'

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [
    PageHeadingComponent,
    SecuritySettingCardComponent,
    LinkedAccountComponent,
    SocialMediaComponent,
    DevicesComponent,
  ],
  templateUrl: './security.component.html',
  styles: ``,
})
export class SecurityComponent {}
