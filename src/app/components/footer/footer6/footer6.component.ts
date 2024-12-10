import { Component } from '@angular/core'
import { LinksAroundComponent } from '../components/links-around/links-around.component'
import { CreditWithTermsComponent } from '../components/credit-with-terms/credit-with-terms.component'

@Component({
  selector: 'app-footer6',
  standalone: true,
  imports: [LinksAroundComponent, CreditWithTermsComponent],
  templateUrl: './footer6.component.html',
  styles: ``,
})
export class Footer6Component {}
