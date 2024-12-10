import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'security-devices',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './devices.component.html',
  styles: ``,
})
export class DevicesComponent {}
