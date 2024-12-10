import { Component, inject } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { RouterLink } from '@angular/router'
import {
  bulbIcon,
  robotIcon,
  technologyIcon,
  wifiIcon,
} from '@public/assets/data/icons'

@Component({
  selector: 'aboutV2-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent {
  private sanitizer = inject(DomSanitizer)

  robotIcon = this.sanitizer.bypassSecurityTrustHtml(robotIcon)
  bulbIcon = this.sanitizer.bypassSecurityTrustHtml(bulbIcon)
  technologyIcon = this.sanitizer.bypassSecurityTrustHtml(technologyIcon)
  wifiIcon = this.sanitizer.bypassSecurityTrustHtml(wifiIcon)
}
