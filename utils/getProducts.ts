import type { ProductMetaObj } from '../typings'

/**
 * Extract products in list from groups
 *
 * @param groups {Object}
 * @returns {ProductMetaObj[]}
 */
export const getProducts = (groups: any): ProductMetaObj[] => {
  try {
    const productsList = Object.entries(groups).flatMap((group) => {
      const [categoryId, productsObj] = Object.values(group) as [string, any]

      return Object.entries(productsObj.B).reduce((acc: any[], item: any) => {
        const [id, product] = item

        acc.push({
          id,
          categoryId,
          name: product.N,
        })

        return acc
      }, [])
    })

    return productsList
  } catch {
    return []
  }
}
