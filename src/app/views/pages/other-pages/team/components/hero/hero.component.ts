import { JarallaxDirective } from '@/app/components/jarallax-directive.component'
import { Component } from '@angular/core'

@Component({
  selector: 'team-hero',
  standalone: true,
  imports: [JarallaxDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
