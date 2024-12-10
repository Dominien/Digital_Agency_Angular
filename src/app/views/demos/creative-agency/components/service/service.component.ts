import { Component } from '@angular/core'
import { services } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'creative-agency-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styles: ``,
})
export class ServiceComponent {
  digitalServices = services

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.digitalServices.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
