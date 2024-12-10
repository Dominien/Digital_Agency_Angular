import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { Autoplay } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { clientsData } from '../../data'
import { CountUpModule } from 'ngx-countup'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'creative-agency-hero',
  standalone: true,
  imports: [SwiperDirective, CountUpModule, CommonModule],
  templateUrl: './hero.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  clientSwiperData = clientsData
  swiperConfig: SwiperOptions = {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
      '1200': { slidesPerView: 4 },
    },
  }
}
