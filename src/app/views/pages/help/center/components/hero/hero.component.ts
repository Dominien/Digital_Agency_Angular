import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Component } from '@angular/core'

@Component({
  selector: 'help-hero',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
