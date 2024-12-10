import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FeatureGroupComponent } from './components/feature-group/feature-group.component'
import { FeatureSection2Component } from './components/feature-section2/feature-section2.component'
import { IntegrationComponent } from './components/integration/integration.component'
import { BlogComponent } from './components/blog/blog.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { FeatureSectionComponent } from './components/feature-section/feature-section.component'
import { Footer2Component } from '@/app/components/footer/footer2/footer2.component'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-saas-v1',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    FeatureGroupComponent,
    FeatureSection2Component,
    IntegrationComponent,
    BlogComponent,
    PricingComponent,
    FeatureSectionComponent,
    Footer2Component,
    NgbAlertModule,
  ],
  templateUrl: './saas-v1.component.html',
  styles: ``,
})
export class SaasV1Component {
  staticAlert = true
}
