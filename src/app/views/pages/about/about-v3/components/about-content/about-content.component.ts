import { Component } from '@angular/core'
import { features } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'aboutV3-content',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './about-content.component.html',
  styles: ``,
})
export class AboutContentComponent {
  featuresList = features

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.featuresList.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
