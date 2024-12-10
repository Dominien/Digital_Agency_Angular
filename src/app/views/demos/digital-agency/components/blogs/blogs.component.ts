import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { blogs } from '../../data'
import { RouterLink } from '@angular/router'
register()
@Component({
  selector: 'digital-agency-blogs',
  standalone: true,
  imports: [SwiperDirective, RouterLink],
  templateUrl: './blogs.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogsComponent {
  blogsData = blogs
  blogSwiper: SwiperOptions = {
    modules: [Pagination],
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination-primary',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  }
}
