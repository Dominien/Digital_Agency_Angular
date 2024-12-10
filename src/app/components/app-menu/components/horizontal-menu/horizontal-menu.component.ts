import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, Input, OnInit, TemplateRef, inject } from '@angular/core'
import {
  ThemeModeService,
  storageThemeKey,
} from '@/app/core/services/theme-mode.service'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import {
  NgbAccordionModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap'
import { NavigationStart, Router, RouterModule } from '@angular/router'
import { DemosMenuDropdownComponent } from './components/demos-menu-dropdown/demos-menu-dropdown.component'
import { PagesMenuDropdownComponent } from './components/pages-menu-dropdown/pages-menu-dropdown.component'
import { MegaMenuDropdownComponent } from './components/mega-menu-dropdown/mega-menu-dropdown.component'
import { PortfolioMenuDropdownComponent } from './components/portfolio-menu-dropdown/portfolio-menu-dropdown.component'
import { ResourcesMenuDropdownComponent } from './components/resources-menu-dropdown/resources-menu-dropdown.component'
import { MenuService } from '@/app/core/helpers/menu'
import { ShoppingService } from '@/app/core/services/shopping.service'
import { Observable } from 'rxjs'
import type { ShoppingState } from '@/app/core/helpers/shop'
import { cartItems } from '@public/assets/data/cart-items'
import { basePath, currency } from '@/app/common/constants'
@Component({
  selector: 'app-horizontal-menu',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LogoBoxComponent,
    RouterModule,
    DemosMenuDropdownComponent,
    PagesMenuDropdownComponent,
    NgbDropdownModule,
    MegaMenuDropdownComponent,
    PortfolioMenuDropdownComponent,
    ResourcesMenuDropdownComponent,
    CommonModule,
    NgbAccordionModule,
    NgbCollapseModule,
    CommonModule,
  ],
  templateUrl: './horizontal-menu.component.html',
  styles: ``,
})
export class HorizontalMenuComponent implements OnInit {
  @Input() resourcesMenu: boolean = false
  @Input() megaMenu!: boolean
  @Input() ulClassName: string = ''
  @Input() navClass: string = ''
  @Input() logoClass: string = ''
  @Input() darkButtonStyle: string = ''
  @Input() docShow!: boolean
  @Input() showSignUp!: boolean
  @Input() showBuyNow!: boolean
  @Input() showShoppingCart!: boolean
  @Input() floatingSearch!: boolean
  @Input() darkButton: boolean = false
  @Input() showSearchInput!: boolean
  @Input() hideToggle: boolean = true
  @Input() containerClass: boolean = true
  @Input() text: string = ''
  isCollapsed = true

  currency = currency
  menuItems: any[] = []
  activeMenuItems: string[] = []
  preferredTheme: string = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  getTheme = localStorage.getItem(storageThemeKey)
  mode: string = this.getTheme ? this.getTheme : this.preferredTheme

  public themeModeService = inject(ThemeModeService)
  offcanvasService = inject(NgbOffcanvas)
  isOffcanvasOpen: boolean = false

  state$!: Observable<ShoppingState>
  cartItemsLength$: Observable<number>

  trimmedURL = location?.pathname?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  constructor(
    private menuService: MenuService,
    private router: Router,
    public shoppingService: ShoppingService
  ) {
    this.state$ = this.shoppingService.state
    this.cartItemsLength$ = this.shoppingService.cartItemsLength$
  }

  ngOnInit() {
    this.menuItems = this.menuService.getAppMenuItems()

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.setActiveMenu(event.url)
      }
    })

    this.setActiveMenu(this.router.url)
    this.offcanvasService.activeInstance.subscribe((e) => {
      this.isOffcanvasOpen = Boolean(e)
    })
  }
  setActiveMenu(url: string): void {
    const matchingMenuItem = this.menuService.getMenuItemFromURL(
      this.menuItems,
      this.trimmedURL
    )
    if (matchingMenuItem) {
      const activeMt = this.menuService.findMenuItem(
        this.menuItems,
        matchingMenuItem.key
      )
      if (activeMt) {
        this.activeMenuItems = [
          activeMt.key,
          ...this.menuService.findAllParent(this.menuItems, activeMt),
        ]
      }
    }
  }

  // Public method to access getActiveClass from the template
  public getActiveClass(key: string): string {
    return this.menuService.getActiveClass(this.activeMenuItems, key)
  }

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.mode = mode
    this.themeModeService.updateTheme(mode)
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }
}
