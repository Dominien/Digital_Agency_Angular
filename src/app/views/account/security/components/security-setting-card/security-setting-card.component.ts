import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'security-setting-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-setting-card.component.html',
  styles: ``,
})
export class SecuritySettingCardComponent {
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() className: string = ''
}
