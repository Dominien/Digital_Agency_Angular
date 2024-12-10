import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { CoreFeatureComponent } from './components/core-feature/core-feature.component'
import { ServicesComponent } from './components/services/services.component'
import { ClientComponent } from './components/client/client.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-servicev1',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    CoreFeatureComponent,
    ServicesComponent,
    ClientComponent,
    Footer1Component,
  ],
  templateUrl: './servicev1.component.html',
  styles: ``,
})
export class Servicev1Component {}
