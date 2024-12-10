export type FeatureType = {
  icon: string
  image?: string
  title: string
  description?: string
}

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
  isLike?: boolean
}
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type NumberRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>

export type SaleType = {
  endsOn?: Date
} & (
  | {
      type: 'percent'
      discount: NumberRange<1, 101>
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
