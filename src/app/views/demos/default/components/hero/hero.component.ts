import { TypedTextDirective } from '@/app/components/ityped.directive'
import { Component } from '@angular/core'

@Component({
  selector: 'demo-default-hero',
  standalone: true,
  imports: [TypedTextDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
