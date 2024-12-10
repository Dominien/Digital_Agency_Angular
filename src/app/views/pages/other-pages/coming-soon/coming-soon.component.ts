import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [TopbarComponent, FooterComponent],
  templateUrl: './coming-soon.component.html',
  styles: ``,
})
export class ComingSoonComponent {}
