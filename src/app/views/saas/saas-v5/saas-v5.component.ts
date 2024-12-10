import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { PricingComponent } from './components/pricing/pricing.component'
import { IntegrationComponent } from './components/integration/integration.component'
import { HeroComponent } from './components/hero/hero.component'
import { Features1Component } from './components/features1/features1.component'
import { Features2Component } from './components/features2/features2.component'
import { Features3Component } from './components/features3/features3.component'
import { ClientsComponent } from './components/clients/clients.component'
import { BlogsComponent } from './components/blogs/blogs.component'
import { Footer6Component } from '@/app/components/footer/footer6/footer6.component'

@Component({
  selector: 'app-saas-v5',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    PricingComponent,
    IntegrationComponent,
    HeroComponent,
    Features1Component,
    Features2Component,
    Features3Component,
    ClientsComponent,
    BlogsComponent,
    Footer6Component,
  ],
  templateUrl: './saas-v5.component.html',
  styles: ``,
})
export class SaasV5Component {}
