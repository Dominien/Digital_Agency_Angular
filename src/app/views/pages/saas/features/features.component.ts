import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { ToolsComponent } from './components/tools/tools.component'
import { Feature3Component } from './components/feature3/feature3.component'
import { HeroComponent } from './components/hero/hero.component'
import { FeatureComponent } from './components/feature/feature.component'
import { Feature2Component } from './components/feature2/feature2.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    ToolsComponent,
    FeatureComponent,
    Feature2Component,
    Feature3Component,
    Footer1Component,
  ],
  templateUrl: './features.component.html',
  styles: ``,
})
export class FeaturesComponent {}
