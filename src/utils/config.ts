interface ConfigCache {
  isTemplate: boolean
}

const cache: Partial<ConfigCache> = {}

export const isTemplate = () => {
  if (cache.isTemplate) {
    return cache.isTemplate
  }
  cache.isTemplate = process.env.NEXT_PUBLIC_TEMPLATE === '1'
  return process.env.NEXT_PUBLIC_TEMPLATE === '1'
}
