import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { blogs } from '../../data'
import { RouterModule } from '@angular/router'
register()
@Component({
  selector: 'creative-agency-blog',
  standalone: true,
  imports: [SwiperDirective, RouterModule],
  templateUrl: './blog.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogComponent {
  blogsData = blogs
  blogTestimonial: SwiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: true,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
}
