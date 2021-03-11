/**
 * Chain product with meta
 *
 * @param products {Product[]}
 * @param meta {Object}
 * @returns {any[]}
 */
export const getProductsWithMeta = (products: any, meta: any) =>
  products
    .map((product: any) => {
      if (!meta[product.id]) return null

      const [, categoryId, quantity, price] = meta[product.id]

      return {
        id: Number(product.id),
        categoryId,
        name: product.name,
        quantity,
        price,
      }
    })
    .filter(Boolean)
