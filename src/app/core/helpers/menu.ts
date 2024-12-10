// menu.service.ts
import { Injectable } from '@angular/core'
import { APP_MENU_ITEMS } from '@public/assets/data/menu-items'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getAppMenuItems() {
    return APP_MENU_ITEMS
  }

  getActiveClass(activeMenuItems: string[], key: string): string {
    const isActive = activeMenuItems.includes(key)
    return isActive ? 'active' : ''
  }

  findAllParent(menuItems: any[], menuItem: any): string[] {
    let parents: string[] = []
    if (menuItem.parentKey) {
      const parent = this.findMenuItem(menuItems, menuItem.parentKey)
      if (parent) {
        parents.push(parent.key)
        if (parent.parentKey) {
          parents = [...parents, ...this.findAllParent(menuItems, parent)]
        }
      }
    }
    return parents
  }

  getMenuItemFromURL(items: any[], url: string): any {
    for (const item of items) {
      if (item.url === url) {
        return item
      }
      const foundItem = this.getMenuItemFromURL(item.children || [], url)
      if (foundItem) return foundItem
    }
    return null
  }

  findMenuItem(menuItems: any[], menuItemKey: string): any {
    for (const element of menuItems) {
      if (element.key === menuItemKey) {
        return element
      }
      if (element.children) {
        const found = this.findMenuItem(element.children, menuItemKey)
        if (found) return found
      }
    }
    return null
  }
}
