import { Component, type OnInit } from '@angular/core'
import { features } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent implements OnInit {
  featuresList = features

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.featuresList.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
