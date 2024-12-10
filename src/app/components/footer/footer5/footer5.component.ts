import { Component } from '@angular/core'
import { LinksAroundComponent } from '../components/links-around/links-around.component'
import { CreditWithTermsComponent } from '../components/credit-with-terms/credit-with-terms.component'

@Component({
  selector: 'app-footer5',
  standalone: true,
  imports: [LinksAroundComponent, CreditWithTermsComponent],
  templateUrl: './footer5.component.html',
  styles: ``,
})
export class Footer5Component {}
