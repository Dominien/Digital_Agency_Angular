import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { blogSlides } from '../../data'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { RouterModule } from '@angular/router'
register()

@Component({
  selector: 'blog-grid-hero',
  standalone: true,
  imports: [SwiperDirective, RouterModule],
  templateUrl: './hero.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  blogSlides = blogSlides

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: true,
    effect: 'fade',
    navigation: {
      nextEl: '#swiper-next',
      prevEl: '#swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination-white',
    },
  }
}
