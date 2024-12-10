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
  selector: 'profile-personal-info',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './personal-info.component.html',
  styles: ``,
})
export class PersonalInfoComponent implements OnInit {
  personalForm!: UntypedFormGroup
  submitted = false

  private fb = inject(UntypedFormBuilder)

  ngOnInit(): void {
    this.personalForm = this.fb.group({
      fname: ['Jacqueline', [Validators.required]],
      lname: ['Miller', [Validators.required]],
      email: ['hello@gmail.com', [Validators.required, Validators.email]],
      number: [2225574666, [Validators.required, Validators.minLength(10)]],
      nationality: ['', [Validators.required]],
      gender: ['male', [Validators.required]],
      address: [
        '2119 N Division Ave, New Hampshire, York, United States',
        [Validators.required],
      ],
    })
  }

  get form() {
    return this.personalForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
