import { Component, Input } from '@angular/core'
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HorizontalMenuComponent],
  templateUrl: './app-menu.component.html',
  styles: ``,
})
export class AppMenuComponent {
  @Input() resourcesMenu: boolean = false
  @Input() megaMenu: boolean = false
  @Input() ulClassName: string = ''
}
