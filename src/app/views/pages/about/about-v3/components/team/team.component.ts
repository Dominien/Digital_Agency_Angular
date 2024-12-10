import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { teamMembers } from '../../data'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Navigation } from 'swiper/modules'
register()

@Component({
  selector: 'aboutV3-team',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './team.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamComponent {
  teamData = teamMembers

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
    breakpoints: {
      '576': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  }
}
