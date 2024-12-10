import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { Component } from '@angular/core'

@Component({
  selector: 'coming-soon-topbar',
  standalone: true,
  imports: [LogoBoxComponent],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent {}
