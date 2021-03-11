import type { Category } from '../typings'

/**
 * Получаем список категорий
 *
 * @param {Object} - группа категорий с товарами
 * @returns {Category[]}
 */
export const getCategories = (groups: any): Category[] => {
  try {
    return Object.entries(groups).map(([id, group]: [string, any]) => {
      const [name] = Object.values(group) as [name: string]

      // Можно сделать и именованным кортежем
      // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#labeled-tuple-elements
      return { id: Number(id), name }
    })
  } catch {
    return []
  }
}
