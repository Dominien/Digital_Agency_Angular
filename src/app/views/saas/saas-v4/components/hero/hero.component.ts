import { currency } from '@/app/common/constants'
import { ParallaxMouseMoveDirective } from '@/app/components/parralax-directive'
import { Component } from '@angular/core'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'saas-v4-hero',
  standalone: true,
  imports: [ParallaxMouseMoveDirective, NgbRatingModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  currency = currency
}
