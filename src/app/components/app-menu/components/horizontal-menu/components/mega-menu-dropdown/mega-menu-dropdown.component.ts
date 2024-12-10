import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { MEGA_MENU_ITEMS } from '../../../../../../../../public/assets/data/menu-items'

@Component({
  selector: 'app-mega-menu-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule],
  template: `
    <!-- Nav item -->
    <li class="nav-item dropdown dropdown-fullwidth" ngbDropdown>
      <a
        [class]="'nav-link dropdown-toggle'"
        ngbDropdownToggle
        href="javascript:void(0);"
        id="megaMenu"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >Megamenu</a
      >
      <div
        class="dropdown-menu py-0"
        aria-labelledby="megaMenu"
        ngbDropdownMenu
      >
        <div class="row p-2 p-sm-4 g-4">
          <!-- Dropdown column item -->
          <div class="col-md-6 col-xl-3">
            <ul class="list-unstyled">
              <li class="dropdown-header h6 mb-2">Useful links</li>
              @for (item of megaMenuItems.usefulLinks; track $index) {
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">{{
                    item
                  }}</a>
                </li>
              }
            </ul>
          </div>

          <!-- Dropdown column item -->
          <div class="col-md-6 col-xl-3">
            <span class="dropdown-header h6 mb-2">Company</span>
            <!-- Dropdown item -->
            @for (company of megaMenuItems.company; track $index) {
              <div
                class="dropdown-item d-flex bg-light-hover position-relative text-wrap py-3"
              >
                <div class="icon-md border bg-body rounded flex-shrink-0">
                  <i class="bi {{ company.icon }} heading-color fs-6"></i>
                </div>
                <div class="ms-2">
                  <a
                    class="stretched-link heading-color fw-bold mb-0"
                    href="javascript:void(0);"
                    >{{ company.title }}</a
                  >
                  <p class="mb-0 text-body small">
                    {{ company.description }}
                  </p>
                </div>
              </div>
            }
          </div>

          <!-- Dropdown column item -->
          <div class="col-md-6 col-xl-3">
            <ul class="list-unstyled">
              <li class="dropdown-header h6 mb-2">Integration</li>
              <li>
                @for (integration of megaMenuItems.integration; track $index) {
                  <a
                    class="dropdown-item d-flex bg-light-hover icon-link icon-link-hover py-2"
                    href="javascript:void(0);"
                  >
                    <img [src]="integration.logo" class="h-30px" alt="" />
                    <span class="heading-color fw-bold ms-2">{{
                      integration.name
                    }}</span>
                    <i class="bi bi-arrow-right ms-auto"></i>
                  </a>
                }
                <a
                  href="javascript:void(0);"
                  class="btn btn-sm btn-light mb-0 d-grid mt-2"
                  >View all</a
                >
              </li>
            </ul>
          </div>

          <!-- Dropdown column item -->
          <div class="col-md-6 col-xl-3">
            <span class="dropdown-header h6 mb-2">Recent blogs</span>
            <!-- Blog item -->
            @for (blog of megaMenuItems.recentBlogs; track $index) {
              <div
                class="dropdown-item bg-light-hover d-flex align-items-sm-center gap-2 position-relative mb-3"
              >
                <img
                  [src]="blog.image"
                  class="rounded icon-lg"
                  alt="blog-img"
                />
                <p class="text-wrap fw-bold mb-0">
                  <a
                    routerLink="{{ blog.link }}"
                    class="stretched-link heading-color text-primary-hover"
                    >{{ blog.title }}</a
                  >
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </li>
  `,
  styles: ``,
})
export class MegaMenuDropdownComponent {
  @Input() menuItems: any[] = []
  @Input() activeMenuItems: string[] = []
  megaMenuItems = MEGA_MENU_ITEMS
}
