import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core'
import { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { CommonModule } from '@angular/common'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { followUsIcons } from '../../data'
import { Autoplay } from 'swiper/modules'
register()

@Component({
  selector: 'contact-v2-hero',
  standalone: true,
  imports: [SwiperDirective, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  followerList = followUsIcons
  contactForm!: UntypedFormGroup
  submitted: boolean = false

  private fb = inject(UntypedFormBuilder)

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      company: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }

  swiperConfig: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    loop: false,
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 4 },
    },
  }

  get form() {
    return this.contactForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
