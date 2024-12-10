import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import {
  communityLinks,
  quickLinks,
  socialMediaLinks,
} from '@public/assets/data/footer-items'

@Component({
  selector: 'footer-links-around',
  standalone: true,
  imports: [LogoBoxComponent, RouterLink],
  templateUrl: './links-around.component.html',
  styles: ``,
})
export class LinksAroundComponent {
  socialMediaLinks = socialMediaLinks
  quickLinks = quickLinks
  communityLinks = communityLinks
}
