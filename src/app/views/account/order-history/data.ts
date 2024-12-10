const shop1Img = 'assets/images/shop/01.png'
const shop2Img = 'assets/images/shop/02.png'
const shop3Img = 'assets/images/shop/03.png'

export type OrderType = {
  image: string
  orderNo: string
  name: string
  size?: string
  deliveryDate: string
  status: 'delivered' | 'processing' | 'cancelled'
  amount: number
}

export const ordersData: OrderType[] = [
  {
    image: shop2Img,
    orderNo: '#458795',
    name: 'Round neck cotton t-shirt',
    size: 'L',
    deliveryDate: '10 Nov, 2023',
    status: 'delivered',
    amount: 103,
  },
  {
    image: shop3Img,
    orderNo: '#548762',
    name: 'Men baseball cap',
    size: 'S',
    deliveryDate: '05 Nov, 2023',
    status: 'cancelled',
    amount: 115,
  },
  {
    image: shop1Img,
    orderNo: '#248795',
    name: 'Woman skincare drops',
    deliveryDate: '05 Nov, 2023',
    status: 'processing',
    amount: 98,
  },
]
