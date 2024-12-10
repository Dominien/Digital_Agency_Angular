import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  template: `
    <nav aria-label="breadcrumb">
      <ol [class]="'breadcrumb breadcrumb-dots pb-0 mb-0 ' + breadcrumbClass">
        <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
        @if (title) {
          @for (item of title; track $index) {
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">{{ item }}</a>
            </li>
          }
        }
        <li class="breadcrumb-item active" aria-current="page">
          {{ pageTitle }}
        </li>
      </ol>
    </nav>
  `,
  styles: ``,
})
export class BreadcrumbComponent {
  @Input() title: string[] = []
  @Input() pageTitle: string = ''
  @Input() breadcrumbClass: string = ''
}
