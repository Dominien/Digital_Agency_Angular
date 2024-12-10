import { Component } from '@angular/core'
import { PageHeadingComponent } from '../components/page-heading/page-heading.component'
import { PersonalInfoComponent } from './components/personal-info/personal-info.component'
import { UpdateEmailComponent } from './components/update-email/update-email.component'
import { UpdatePasswordComponent } from './components/update-password/update-password.component'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PageHeadingComponent,
    PersonalInfoComponent,
    UpdateEmailComponent,
    UpdatePasswordComponent,
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {}
