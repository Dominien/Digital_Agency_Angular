export type IdType = string

export type CategoryType = {
  id: IdType
  name: string
  image?: string
  icon?: string
}

type ColorType = {
  name: string
  code?: string
}

export type ProductAttributesType = {
  colors?: ColorType[]
  weights?: string[]
  material?: string
  composition?: string
  gender?: 'Male' | 'Female'
  size?: string
}

export type SaleType = {
  endsOn?: Date
} & (
  | {
      type: 'percent'
      discount: number
    }
  | {
      type: 'amount'
      discount: number
    }
)

export type ReviewType = {
  count?: number
  stars: number
}

export type ProductType = {
  id: IdType
  categoryId?: CategoryType['id']
  category?: CategoryType
  images: string[]
  tag?: string
  name: string
  description?: string
  price: number
  tags?: string[]
  attributes?: ProductAttributesType
  sale?: SaleType
  isPopular?: boolean
  isNew?: boolean
  stock?: number
  review?: ReviewType
  url?: string
}

export type CartType = {
  id: IdType
  productId: IdType
  product: ProductType
  quantity: number
}

export type WishlistType = ProductType

export type CalculatedOrder = {
  total: number
  totalDiscount: number
  tax: number
  orderTotal: number
}

export type ShoppingState = {
  cartItems: CartType[]
  wishlists: WishlistType[]
  addToCart: (product: ProductType, quantity: number) => void
  toggleToWishlist: (product: ProductType) => void
  isInWishlist: (product: ProductType) => boolean
  isInCart: (product: ProductType) => boolean
  updateQuantityForProduct: (product: ProductType, quantity: number) => void
  getCalculatedOrder: () => CalculatedOrder
}
