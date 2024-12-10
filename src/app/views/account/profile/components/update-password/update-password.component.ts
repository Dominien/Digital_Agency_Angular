import { CommonModule } from '@angular/common'
import { Component, inject, type OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type AbstractControl,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'profile-update-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-password.component.html',
  styles: ``,
})
export class UpdatePasswordComponent implements OnInit {
  passwordForm!: UntypedFormGroup
  submitted = false
  isShowPassword = false
  private fb = inject(UntypedFormBuilder)

  ngOnInit(): void {
    this.passwordForm = this.fb.group(
      {
        currentPWD: ['', Validators.required],
        newPWD: ['', Validators.required],
        confirmPWD: ['', Validators.required],
      },
      { validators: this.validateAreEqual }
    )
  }

  public validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.newPWD === c.value.confirmPWD ? null : { notSame: true }
  }

  get form() {
    return this.passwordForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
