import { Component } from '@angular/core'
import { services } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
import { StickyDirective } from '@/app/components/sticky.directive'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'services',
  standalone: true,
  imports: [StickyDirective, RouterLink],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  servicesList = services

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.servicesList.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
