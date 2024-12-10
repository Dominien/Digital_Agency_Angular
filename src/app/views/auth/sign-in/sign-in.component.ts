import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { login } from '@/app/store/authentication/authentication.actions'
import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { RouterLink } from '@angular/router'
import { Store } from '@ngrx/store'
import { register } from 'swiper/element'
import { Autoplay, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    SwiperDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './sign-in.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignInComponent {
  signinForm!: UntypedFormGroup
  submitted: boolean = false
  passwordType: boolean = true

  public fb = inject(UntypedFormBuilder)
  store = inject(Store)

  constructor() {
    this.signinForm = this.fb.group({
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    })
  }

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    autoplay: true,
    loop: true,
    pagination: {
      el: '#signin-pagination',
      clickable: true,
    },
  }

  get form() {
    return this.signinForm.controls
  }

  onLogin() {
    this.submitted = true
    if (this.signinForm.valid) {
      const email = this.form['email'].value // Get the username from the form
      const password = this.form['password'].value // Get the password from the form

      // Login Api
      this.store.dispatch(login({ email: email, password: password }))
    }
  }

  changeType() {
    this.passwordType = !this.passwordType
  }
}
