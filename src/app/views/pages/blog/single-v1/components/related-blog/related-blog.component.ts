import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { blogs } from '../../data'
import { register } from 'swiper/element'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, Navigation } from 'swiper/modules'
import { RouterLink } from '@angular/router'
register()

@Component({
  selector: 'singleV1-related-blog',
  standalone: true,
  imports: [SwiperDirective, RouterLink],
  templateUrl: './related-blog.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RelatedBlogComponent {
  blogList = blogs

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Autoplay],
    loop: false,
    autoplay: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  }
}
