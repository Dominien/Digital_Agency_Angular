import { Component } from '@angular/core'
import { DecorationPatternComponent } from '../components/decoration-pattern/decoration-pattern.component'
import { LogoBoxComponent } from '../../logo-box/logo-box.component'
import {
  communityLinks,
  quickLinks,
  socialMediaLinks,
} from '@public/assets/data/footer-items'
import { CreditWithLanguageComponent } from '../components/credit-with-language/credit-with-language.component'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-footer1',
  standalone: true,
  imports: [
    DecorationPatternComponent,
    LogoBoxComponent,
    CreditWithLanguageComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './footer1.component.html',
  styles: ``,
})
export class Footer1Component {
  quickLink = quickLinks
  communityList = communityLinks
  socialLinks = socialMediaLinks
}
