import type { ProductType } from '@/app/views/demos/landing-product/types'
import { products } from './products'

export type CartType = {
  id: string
  productId: string
  product: ProductType
  quantity: number
}

export const cartItems: CartType[] = [
    {
        id: '1',
        product: products[0],
        productId: products[0].id,
        quantity: 1,
    },
    {
        id: '2',
        product: products[1],
        productId: products[1].id,
        quantity: 1
    },
    {
        id: '3',
        product: products[2],
        productId: products[2].id,
        quantity: 1
    },
]