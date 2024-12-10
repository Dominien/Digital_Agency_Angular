import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { CoreFeaturesComponent } from './components/core-features/core-features.component'
import { SolutionComponent } from './components/solution/solution.component'
import { CtaComponent } from './components/cta/cta.component'
import { FaqComponent } from './components/faq/faq.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-feature-single',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    CoreFeaturesComponent,
    SolutionComponent,
    CtaComponent,
    FaqComponent,
    Footer1Component,
  ],
  templateUrl: './feature-single.component.html',
  styles: ``,
})
export class FeatureSingleComponent {}
