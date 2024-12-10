import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { clients } from '../../data'
import { JarallaxDirective } from '@/app/components/jarallax-directive.component'
import { RouterLink } from '@angular/router'
register()

@Component({
  selector: 'saas-v4-tour-video',
  standalone: true,
  imports: [SwiperDirective, JarallaxDirective, RouterLink],
  templateUrl: './tour-video.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TourVideoComponent {
  clients = clients

  videoSwiper: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      '576': { slidesPerView: 3 },
      '992': { slidesPerView: 4 },
      '1200': { slidesPerView: 5 },
    },
  }
}
