import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'contact-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  contactForm!: UntypedFormGroup
  submitted: boolean = false

  private fb = inject(UntypedFormBuilder)

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      position: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }

  get form() {
    return this.contactForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
