import { Component } from '@angular/core'
import { features } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'saas-v3-integration',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './integration.component.html',
  styles: ``,
})
export class IntegrationComponent {
  featuresData = features

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.featuresData.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
