export type ProductMetaListSource = [
  id: number,
  baz: boolean,
  quantity: number,
  groupId: number,
  bar: string,
  price: number,
  foo: boolean
]

export type ProductMetaList = [
  id: number,
  categoryId: number,
  quantity: number,
  price: number
]

export type ProductMetaObj = {
  id: number
  categoryId: number
  name: string
}

export type ProductsMetaHash = {
  [key: string]: ProductMetaList
}
