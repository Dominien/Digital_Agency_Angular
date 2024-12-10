import { Injectable } from '@angular/core'
import { BehaviorSubject, map, type Observable } from 'rxjs'
import type {
  ProductType,
  CartType,
  WishlistType,
  ShoppingState,
} from '../helpers/shop'
import { cartItems } from '@public/assets/data/cart-items'
import { LocalStorageService } from './local-storage.service'
import { calculateDiscount } from '../helpers/products'
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private storageKey = '__Mizzle_NG_'
  private initialState: ShoppingState = {
    cartItems:
      this.localStorageService.getItem(`${this.storageKey}_cartItems`) ||
      cartItems,
    wishlists:
      this.localStorageService.getItem(`${this.storageKey}_wishlists`) || [],
    addToCart: () => {},
    toggleToWishlist: () => {},
    isInWishlist: () => false,
    isInCart: () => false,
    updateQuantityForProduct: () => {},
    getCalculatedOrder: () => {
      return {
        orderTotal: 0,
        tax: 0,
        total: 0,
        totalDiscount: 0,
      }
    },
  }

  private state$ = new BehaviorSubject<ShoppingState>(this.initialState)

  constructor(
    private toastr: ToastrService,
    private localStorageService: LocalStorageService
  ) {
    this.state$.subscribe((state) => {
      this.localStorageService.setItem(
        `${this.storageKey}_cartItems`,
        state.cartItems
      )
      this.localStorageService.setItem(
        `${this.storageKey}_wishlists`,
        state.wishlists
      )
    })
  }

  get state() {
    return this.state$.asObservable()
  }

  get cartItemsLength$(): Observable<number> {
    return this.state$.pipe(map((state) => state.cartItems.length))
  }

  private updateState(changes: Partial<ShoppingState>) {
    this.state$.next({ ...this.state$.value, ...changes })
  }

  getCalculatedOrder() {
    const state = this.state$.value
    let cartTotal = 0,
      cartDiscount = 0

    state.cartItems.forEach((cart) => {
      cartDiscount += calculateDiscount(cart.product!) * cart.quantity
      cartTotal += cart.product!.price * cart.quantity
    })

    const cartAmount = cartTotal - cartDiscount
    const tax = cartAmount * 0.18

    return {
      total: cartTotal,
      totalDiscount: cartDiscount,
      tax: tax,
      orderTotal: cartAmount + tax,
    }
  }

  isInCart(product: ProductType): boolean {
    const state = this.state$.value
    return (
      state.cartItems.find(
        (cartItem: CartType) => cartItem?.productId == product?.id
      ) != null
    )
  }

  updateQuantityForProduct(product: ProductType, quantity: number): void {
    const state = this.state$.value
    let cartItems = []
    if (quantity < 0) return
    if (quantity == 0) {
      cartItems = state.cartItems.filter(
        (cart: CartType) => cart.productId != product.id
      )
      this.toastr.error(`${product.name} removed from your cart`, '', {
        timeOut: 1000,
        progressBar: true,
      })
    } else {
      if (this.isInCart(product)) {
        cartItems = state.cartItems.map((cart: CartType) => {
          if (cart.productId == product.id) {
            return {
              ...cart,
              quantity: quantity,
            }
          }
          return cart
        })
      } else {
        cartItems = [
          ...state.cartItems,
          {
            id: (state.cartItems.length + 1).toString(),
            product: product,
            quantity: quantity,
            productId: product.id,
          },
        ]

        this.toastr.success(`${product.name} added to your cart`, '', {
          timeOut: 1000,
          progressBar: true,
        })
      }
    }
    this.updateState({ cartItems })
  }

  isInWishlist(product: ProductType): boolean {
    const state = this.state$.value
    return (
      state.wishlists.find(
        (wishlistDish: WishlistType) => wishlistDish?.id == product?.id
      ) != null
    )
  }

  toggleToWishlist(product: ProductType): void {
    const state = this.state$.value
    let wishlists = state.wishlists
    if (this.isInWishlist(product)) {
      wishlists = wishlists.filter((p: WishlistType) => p.id != product.id)
    } else {
      wishlists = [...wishlists, product]
    }
    this.updateState({ wishlists })
  }
}
