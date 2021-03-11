import { ProductMetaListSource, ProductsMetaHash } from '../typings'

/**
 * Convert products object to hash
 *
 * @param {Array} values
 */
export const getProductsMetaObjToHash = (values: any[]): ProductsMetaHash => {
  const hash: ProductsMetaHash = {}

  values.forEach((value) => {
    const [id, , quantity, groupId, , price] = Object.values(
      value
    ).reverse() as ProductMetaListSource

    hash[id] = [id, groupId, quantity, price]
  })

  return hash
}
