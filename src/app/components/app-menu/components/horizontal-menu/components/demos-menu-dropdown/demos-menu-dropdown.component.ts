import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  NgbAccordionModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap'
import { APP_MENU_ITEMS } from '../../../../../../../../public/assets/data/menu-items'
import { MenuService } from '@/app/core/helpers/menu'

@Component({
  selector: 'app-demos-menu-dropdown',
  standalone: true,
  imports: [RouterModule, NgbDropdownModule, CommonModule, NgbAccordionModule],
  template: `
    <!-- Nav item -->
    @for (item of horizontalMenu; track $index) {
      @if ($index === 0) {
        <li class="nav-item dropdown" ngbDropdown>
          <a
            [class]="'nav-link dropdown-toggle' + getActiveClass(item.key)"
            ngbDropdownToggle
            href="javascript:void(0);"
            data-bs-auto-close="outside"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >{{ item.label }}</a
          >
          <div class="dropdown-menu dropdown-menu-size-lg p-3" ngbDropdownMenu>
            <div class="row pt-2">
              <!-- Image and button -->
              <div class="col-sm-6">
                @for (child of item.children.slice(0, 7); track $index) {
                  <ul class="list-unstyled">
                    <li>
                      <a
                        [class]="'dropdown-item' + getActiveClass(child.key)"
                        routerLink="{{ child.url }}"
                        >{{ child.label }}</a
                      >
                    </li>
                  </ul>
                }
              </div>
              <div class="col-sm-6">
                @for (child of item.children.slice(7, 14); track $index) {
                  <ul class="list-unstyled">
                    <li>
                      <a
                        [class]="'dropdown-item' + getActiveClass(child.key)"
                        routerLink="{{ child.url }}"
                        >{{ child.label }}</a
                      >
                    </li>
                  </ul>
                }
              </div>
              <!-- CTA -->
              <div class="col-12">
                <hr class="mt-2" />
                <!-- Divider -->
                <div
                  class="d-sm-flex justify-content-between align-items-center px-2"
                >
                  <div class="me-3 mb-2 mb-sm-0">
                    <h6 class="mb-2 mb-sm-0">Ready to get started?</h6>
                    <small class="mb-0"
                      >Take your documents to the next level with Mizzle</small
                    >
                  </div>
                  <a href="javascript:void(0);" class="btn btn-sm btn-primary"
                    >Get in touch</a
                  >
                </div>
              </div>
            </div>
          </div>
        </li>
      }
    }
  `,
  styles: ``,
})
export class DemosMenuDropdownComponent {
  @Input() menuItems: any[] = []
  @Input() activeMenuItems: string[] = []
  horizontalMenu = APP_MENU_ITEMS

  constructor(public menuService: MenuService) {}

  getActiveClass(key: string): string {
    return this.menuService.getActiveClass(this.activeMenuItems, key)
      ? ' active'
      : ''
  }
}
