import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { GridComponent } from './components/grid/grid.component'
import { AchievementsComponent } from './components/achivements/achivements.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    GridComponent,
    AchievementsComponent,
    Footer1Component,
  ],
  templateUrl: './team.component.html',
  styles: ``,
})
export class TeamComponent {}
