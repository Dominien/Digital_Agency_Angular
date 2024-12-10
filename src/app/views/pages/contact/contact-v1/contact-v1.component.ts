import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { ContactInfoComponent } from './components/contact-info/contact-info.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'contact-v1',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    ContactInfoComponent,
    Footer1Component,
  ],
  templateUrl: './contact-v1.component.html',
  styleUrl: './contact-v1.component.scss',
})
export class ContactV1Component {}
