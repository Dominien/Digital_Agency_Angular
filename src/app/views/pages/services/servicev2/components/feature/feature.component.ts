import { Component } from '@angular/core'
import { features } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'servicev2-feature',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feature.component.html',
  styles: ``,
})
export class FeatureComponent {
  featuresList = features

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.featuresList.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
