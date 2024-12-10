import { StickyDirective } from '@/app/components/sticky.directive'
import { Component } from '@angular/core'

@Component({
  selector: 'saas-v4-features',
  standalone: true,
  imports: [StickyDirective],
  templateUrl: './features.component.html',
  styles: ``,
})
export class FeaturesComponent {}
