import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { HelpDetailComponent } from './components/help-detail/help-detail.component'
import { SupportLinkComponent } from './components/support-link/support-link.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-center-detail',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    HelpDetailComponent,
    SupportLinkComponent,
    Footer1Component,
  ],
  templateUrl: './center-detail.component.html',
  styles: ``,
})
export class CenterDetailComponent {}
