import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-use-layout',
  standalone: true,
  imports: [RouterModule],
  template: ` <router-outlet /> `,
  styles: ``,
})
export class UseLayoutComponent {}
