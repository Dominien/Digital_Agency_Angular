import { CommonModule } from '@angular/common'
import { Component, inject, type OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'profile-update-email',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-email.component.html',
  styles: ``,
})
export class UpdateEmailComponent implements OnInit {
  emailForm!: UntypedFormGroup
  submitted = false

  private fb = inject(UntypedFormBuilder)

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['hello@gmail.com', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.emailForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
