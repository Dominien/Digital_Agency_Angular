import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FeatureComponent } from './components/feature/feature.component'
import { CtaComponent } from './components/cta/cta.component'
import { FaqComponent } from './components/faq/faq.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-servicev2',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    FeatureComponent,
    CtaComponent,
    FaqComponent,
    Footer1Component,
  ],
  templateUrl: './servicev2.component.html',
  styles: ``,
})
export class Servicev2Component {}
