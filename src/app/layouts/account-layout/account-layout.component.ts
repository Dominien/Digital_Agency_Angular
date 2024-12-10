import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { VerticalNavigationbarComponent } from './components/vertical-navigationbar/vertical-navigationbar.component'
import { RouterModule } from '@angular/router'
import {
  NgbActiveOffcanvas,
  NgbOffcanvas,
  NgbOffcanvasConfig,
} from '@ng-bootstrap/ng-bootstrap'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-account-layout',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    VerticalNavigationbarComponent,
    RouterModule,
    Footer1Component,
  ],
  template: `
    <sticky-header-component headerClass="header-sticky header-absolute">
      <app-horizontal-menu
        ulClassName="mx-auto"
        [docShow]="true"
        [showSignUp]="true"
        [showBuyNow]="true"
      />
    </sticky-header-component>

    <main>
      <!-- =======================
Content START -->
      <section class="pt-sm-7">
        <div class="container pt-3 pt-xl-5">
          <div class="row">
            <!-- Sidebar -->
            <div class="col-lg-4 col-xl-3">
              <!-- Responsive offcanvas body START -->
              <div
                class="offcanvas-lg offcanvas-start h-100"
                tabindex="-1"
                id="offcanvasSidebar"
              >
                <!-- Offcanvas header -->
                <account-vertical-navigationbar />
              </div>
            </div>

            <div class="col-lg-8 col-xl-9 ps-lg-4 ps-xl-6">
              <router-outlet />
            </div>
          </div>
        </div>
      </section>
    </main>

    <app-footer1 />
  `,
  providers: [NgbActiveOffcanvas],
})
export class AccountLayoutComponent {}
