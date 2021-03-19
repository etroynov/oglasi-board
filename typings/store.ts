export type Product = {
  id: number
  quantity: number
  price: number
}

export type CartProductType = Product & {
  count: number
}

export type Category = {
  id: number
  name: string
}

export type State<T> = { data: T[] }

export type RootState = {
  products: State<Product>
  categories: State<Category>
  cart: State<Product>
}
