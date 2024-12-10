import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { RESOURCES_MENU_ITEMS } from '../../../../../../../../public/assets/data/menu-items'

@Component({
  selector: 'app-resources-menu-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <!-- Nav item -->
    <li class="nav-item dropdown dropdown-fullwidth" ngbDropdown>
      <a
        class="nav-link dropdown-toggle"
        ngbDropdownToggle
        href="javascript:void(0);"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >Resources</a
      >
      <div class="dropdown-menu py-0" ngbDropdownMenu>
        <div class="row p-2 p-sm-4">
          <!-- Dropdown column item -->
          <div class="col-md-6 col-xl-4 col-xxl-3">
            <div class="d-md-flex gap-4 h-100">
              <!-- Links -->
              <ul class="list-unstyled w-100">
                <li class="dropdown-header h6 mb-2">Useful links</li>
                @for (item of resourcesMenuItems.usefulLinks; track $index) {
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="bi {{ item.icon }} fa-fw me-2"></i
                      >{{ item.name }}</a
                    >
                  </li>
                }
              </ul>
              <!-- Divider line -->
              <div class="vr ms-2 ms-auto d-none d-md-block"></div>
            </div>
          </div>

          <!-- Dropdown column item -->
          <div class="col-md-6 col-xl-4 col-xxl-5 h-100">
            <span class="dropdown-header h6 mb-2">Key features</span>

            <!-- Dropdown item -->
            @for (key of resourcesMenuItems.keyFeatures; track $index) {
              <div
                class="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3"
              >
                <div class="d-flex me-3">
                  <!-- Icon -->
                  <div class="icon-md border bg-body rounded flex-shrink-0">
                    <i class="bi-file-earmark-text heading-color fs-6"></i>
                  </div>
                  <!-- Content -->
                  <div class="mx-2">
                    <p class="stretched-link heading-color fw-bold mb-0">
                      {{ key.title }}
                    </p>
                    <p class="mb-0 text-body small">
                      {{ key.description }}
                    </p>
                  </div>
                </div>
                <!-- Button -->
                <a
                  class="icon-link icon-link-hover text-primary-hover stretched-link"
                  href="docs/index.html"
                  target="_blank"
                  ><i class="bi {{ key.icon }}"></i>
                </a>
              </div>
            }
          </div>

          <!-- Feature resources card -->
          <div class="col-lg-4">
            <span class="dropdown-header h6 mb-2">Feature resources</span>

            <!-- Feature card -->
            <div class="card bg-transparent px-3">
              <!-- Image -->
              <img
                src="assets/images/blog/02.jpg"
                class="rounded mb-3"
                alt="feature-img"
              />
              <div class="card-body p-0">
                <h6><a href="javascript:void(0);">Featured title here</a></h6>
                <p class="mb-2">
                  Departure defective arranging rapturous did believe him all
                  had supported.
                </p>
                <a
                  class="icon-link icon-link-hover stretched-link z-index-2"
                  href="javascript:void(0);"
                  >Check it out<i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `,
  styles: ``,
})
export class ResourcesMenuDropdownComponent {
  resourcesMenuItems = RESOURCES_MENU_ITEMS
}
