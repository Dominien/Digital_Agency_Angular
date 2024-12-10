import { Component, Input } from '@angular/core'
import { RouterLink, RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { APP_MENU_ITEMS } from '../../../../../../../../public/assets/data/menu-items'
import { MenuService } from '@/app/core/helpers/menu'

@Component({
  selector: 'app-portfolio-menu-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule],
  template: `
    @for (item of horizontalMenu; track $index) {
      @if ($index == 2) {
        <li class="nav-item dropdown" ngbDropdown>
          <a
            ngbDropdownToggle
            [class]="'nav-link dropdown-toggle' + getActiveClass(item.key)"
            href="javascript:void(0);"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >{{ item.label }}</a
          >
          <div
            class="dropdown-menu dropdown-menu-center dropdown-menu-size-xl p-3"
            ngbDropdownMenu
          >
            <div class="row g-xl-3">
              <!-- Work -->
              <div class="col-xl-8 d-none d-xl-block">
                <div class="d-flex gap-4">
                  <!-- Card -->
                  <div class="card bg-transparent">
                    <!-- Image -->
                    <img
                      src="assets/images/portfolio/list/01.jpg"
                      class="card-img"
                      alt=""
                    />
                    <!-- Card body -->
                    <div class="card-body px-0 text-start pb-0">
                      <h6>
                        <a href="javascript:void(0);"
                          >Ceremony Worthy of Time</a
                        >
                      </h6>
                      <p class="mb-2 small">
                        We help our customers better manage their web presence.
                      </p>
                      <a
                        class="icon-link icon-link-hover stretched-link mb-0"
                        routerLink="/portfolio/case-study/v1"
                        >Learn more<i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <!-- Card -->
                  <div class="card bg-transparent">
                    <!-- Image -->
                    <img
                      src="assets/images/portfolio/list/02.jpg"
                      class="card-img"
                      alt=""
                    />
                    <!-- Card body -->
                    <div class="card-body px-0 text-start pb-0">
                      <h6>
                        <a href="javascript:void(0);"
                          >Brushstrokes and Beyond</a
                        >
                      </h6>
                      <p class="mb-2 small">
                        We help our customers better manage their web presence.
                      </p>
                      <a
                        class="icon-link icon-link-hover stretched-link mb-0"
                        routerLink="/portfolio/case-study/v2"
                        >Learn more<i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <!-- Divider line -->
                  <div class="vr ms-2"></div>
                </div>
              </div>

              <!-- Index nav links -->
              <div class="col-xl-4">
                <ul class="list-unstyled">
                  <li class="dropdown-header h6">Portfolio Pages</li>
                  @for (child of item.children; track $index) {
                    <li>
                      <a
                        [class]="'dropdown-item' + getActiveClass(child.key)"
                        routerLink="{{ child.url }}"
                        >{{ child.label }}</a
                      >
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </li>
      }
    }
  `,
  styles: ``,
})
export class PortfolioMenuDropdownComponent {
  horizontalMenu = APP_MENU_ITEMS
  @Input() menuItems: any[] = []
  @Input() activeMenuItems: string[] = []

  constructor(private menuService: MenuService) {}

  getActiveClass(key: string): string {
    return this.menuService.getActiveClass(this.activeMenuItems, key)
      ? ' active'
      : ''
  }
}
