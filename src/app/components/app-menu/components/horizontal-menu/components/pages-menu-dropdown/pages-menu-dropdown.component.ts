import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { APP_MENU_ITEMS } from '../../../../../../../../public/assets/data/menu-items'
import { MenuService } from '@/app/core/helpers/menu'
interface MenuItem {
  key: string
  label: string
  parentKey: string
  url?: string
  badge?: string
  children?: MenuItem[]
}
@Component({
  selector: 'app-pages-menu-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule],
  template: `
    <!-- Nav item -->
    @for (item of horizontalMenu; track $index) {
      @if ($index === 1) {
        <li class="nav-item dropdown" ngbDropdown>
          <a
            ngbDropdownToggle
            [class]="'nav-link dropdown-toggle' + getActiveClass(item.key)"
            href="javascript:void(0);"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-haspopup="true"
            aria-expanded="false"
            >{{ item.label }}</a
          >
          <ul class="dropdown-menu" ngbDropdownMenu>
            @for (child of item.children; track $index) {
              <!-- Dropdown submenu -->
              @if (hasSubChild(child)) {
                <li class="dropdown dropend" ngbDropdown>
                  <a
                    [class]="
                      'nav-link dropdown-link dropdown-toggle' +
                      getActiveClass(child.key)
                    "
                    ngbDropdownToggle
                    data-bs-toggle="dropdown"
                    href="javascript:void(0);"
                    >{{ child.label }}</a
                  >
                  <ul class="dropdown-menu" ngbDropdownMenu>
                    @for (children of child.children; track $index) {
                      <li>
                        <a
                          [class]="
                            'dropdown-item' + getActiveClass(children.key)
                          "
                          [routerLink]="children.url"
                          >{{ children.label }}</a
                        >
                      </li>
                    }
                  </ul>
                </li>
              } @else {
                <li>
                  <a
                    [class]="'dropdown-item' + getActiveClass(child.key)"
                    routerLink="{{ child.url }}"
                    >{{ child.label }}</a
                  >
                </li>
              }
            }
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="mailto:stackbros07@gmail.com"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="me-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.03 7.03 0 0 1-3.658 3.658l-1.115-2.788a4 4 0 0 0 1.985-1.985zM5.228 14.43a7.03 7.03 0 0 1-3.658-3.658l2.788-1.115a4 4 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4 4 0 0 0-1.985-1.985l1.115-2.788a7.03 7.03 0 0 1 3.658 3.658m-8.087-.87a4 4 0 0 0-1.985 1.985L1.57 5.228A7.03 7.03 0 0 1 5.228 1.57zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                  ></path></svg
                >Support</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://mizzle-ng.vercel.app/docs/index.html"
                target="_blank"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="me-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                  ></path>
                  <path
                    d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
                  ></path></svg
                >Documentation</a
              >
            </li>
          </ul>
        </li>
      }
    }
  `,
  styles: ``,
})
export class PagesMenuDropdownComponent {
  horizontalMenu = APP_MENU_ITEMS
  @Input() menuItems: any[] = []
  @Input() activeMenuItems: string[] = []

  constructor(private menuService: MenuService) {}

  hasSubChild(item: MenuItem): item is MenuItem & { children: MenuItem[] } {
    return !!item.children && item.children.length > 0
  }

  getActiveClass(key: string): string {
    return this.menuService.getActiveClass(this.activeMenuItems, key)
      ? ' active'
      : ''
  }
}
