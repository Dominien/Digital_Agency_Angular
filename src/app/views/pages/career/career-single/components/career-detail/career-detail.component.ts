import { currency } from '@/app/common/constants'
import { CommonModule } from '@angular/common'
import { Component, inject, type OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'

@Component({
  selector: 'career-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ScrollToModule],
  templateUrl: './career-detail.component.html',
  styles: ``,
  providers: [ScrollToService],
})
export class CareerDetailComponent implements OnInit {
  currency = currency
  careerForm!: UntypedFormGroup
  submitted: boolean = false

  private fb = inject(UntypedFormBuilder)

  ngOnInit() {
    this.careerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      position: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }

  get form() {
    return this.careerForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
