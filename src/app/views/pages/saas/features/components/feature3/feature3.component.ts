import { Component } from '@angular/core'
import { features } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'feature3',
  standalone: true,
  imports: [],
  templateUrl: './feature3.component.html',
  styles: ``,
})
export class Feature3Component {
  featuresList = features

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.featuresList.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
