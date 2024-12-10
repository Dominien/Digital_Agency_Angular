import { currentYear } from '@/app/common/constants'
import { BsStepperWrapperComponent } from '@/app/components/bs-stepper-wrapper.component'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CommonModule } from '@angular/common'
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
} from '@angular/core'
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms'
import { RouterLink } from '@angular/router'
import {
  NgbPopoverModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap'
import Stepper from 'bs-stepper'
import { NgOtpInputModule } from 'ng-otp-input'
import { register } from 'swiper/element'
import { Autoplay, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

register()

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    SwiperDirective,
    BsStepperWrapperComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    NgbProgressbarModule,
    RouterLink,
    NgbPopoverModule,
  ],
  templateUrl: './forgot-password.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ForgotPasswordComponent implements AfterViewInit {
  @ViewChild('stepperRef', { static: false }) stepperRef!: ElementRef
  @Input() className?: string
  fieldTextType!: boolean
  fillAmount: number = 0
  password: string = ''
  confirmPwd: string = ''
  email: string = ''
  passwordReset!: UntypedFormGroup
  stepperInstance?: Stepper
  forgotpwdForm!: UntypedFormGroup
  submitted: boolean = false
  submit: boolean = false
  currentYear = currentYear
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    containerClass:
      'autotab d-flex justify-content-between gap-1 gap-sm-3 mb-3',
    inputClass: 'form-control text-center p-3',
    inputStyles: {
      width: '25%',
      height: '58px',
      border: '1px solid var(--bs-border-color)',
      fontSize: 'medium',
      borderRadius: '0.313rem',
      marginRight: '0px',
    },
  }
  public fb = inject(UntypedFormBuilder)

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.stepperRef && !this.stepperInstance) {
        this.stepperInstance = new Stepper(this.stepperRef.nativeElement, {
          linear: false,
          animation: true,
        })
      }
    })
  }

  progressVariant: { variant: string; message: string } = {
    variant: 'danger',
    message: 'Write your password...',
  }

  ngOnDestroy(): void {
    this.stepperInstance?.destroy()
  }

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: true,
    pagination: {
      el: '#forgot-pagination',
      clickable: true,
    },
  }

  emailSubmit() {
    this.submit = true
  }

  onSubmit() {
    this.submitted = true
  }

  validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.password === c.value.confirmpwd ? null : { notSame: true }
  }

  updatePasswordStrength(): void {
    this.fillAmount = this.calculatePasswordStrength(this.password)
    this.progressVariant = this.getProgress(this.fillAmount)
  }

  calculatePasswordStrength(password: string): number {
    let score = 0

    const regexLower = new RegExp('(?=.*[a-z])')
    const regexUpper = new RegExp('(?=.*[A-Z])')
    const regexDigits = new RegExp('(?=.*[0-9])')
    const regexLength = new RegExp('(?=.{' + 8 + ',})')

    if (regexLower.test(password)) score += 25
    if (regexUpper.test(password)) score += 25
    if (regexDigits.test(password)) score += 25
    if (regexLength.test(password)) score += 25

    return score
  }

  changetype() {
    this.fieldTextType = !this.fieldTextType
  }

  getProgress(progress: number): { variant: string; message: string } {
    if (progress > 75) {
      return {
        variant: 'success',
        message: 'Yeah! that password rocks ;)',
      }
    } else if (progress > 50) {
      return {
        variant: 'info',
        message: 'That is better',
      }
    } else if (progress > 25) {
      return {
        variant: 'warning',
        message: 'That is a simple one',
      }
    } else {
      return {
        variant: 'danger',
        message: 'Easy peasy!',
      }
    }
  }
}
