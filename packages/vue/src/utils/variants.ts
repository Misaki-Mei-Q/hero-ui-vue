export const mapPropsVariants = <T extends Record<string, any>, K extends keyof T>(
  props: T,
  variantKeys?: K[],
  removeVariantProps = true,
): readonly [Omit<T, K> | T, Pick<T, K> | Record<string, never>] => {
  if (!variantKeys) {
    return [props, {}]
  }

  const picked = variantKeys.reduce(
    (acc, key) => (key in props ? { ...acc, [key]: props[key] } : { ...acc }),
    {} as Pick<T, K>,
  )

  if (removeVariantProps) {
    const omitted = Object.keys(props)
      .filter((key) => !variantKeys.includes(key as K))
      .reduce((acc, key) => ({ ...acc, [key]: props[key as keyof T] }), {} as Omit<T, K>)

    return [omitted, picked] as [Omit<T, K>, Pick<T, K>]
  } else {
    return [props, picked] as [T, Pick<T, K>]
  }
}

export type VariantConfig<T extends Record<string, any>> = {
  base: string
  variants?: T
  modifiers?: Record<string, boolean | undefined>
}

export function createVariantBuilder<T extends Record<string, string>>(baseClass: string) {
  return (
    config: {
      variants?: Partial<T>
      modifiers?: Record<string, boolean | undefined>
    } = {},
  ) => {
    const classes = [baseClass]

    if (config.variants) {
      Object.values(config.variants).forEach((value) => {
        if (value) {
          classes.push(`${baseClass}--${value}`)
        }
      })
    }

    if (config.modifiers) {
      Object.entries(config.modifiers).forEach(([modifier, enabled]) => {
        if (enabled) {
          classes.push(`${baseClass}--${modifier}`)
        }
      })
    }

    return classes.join(' ')
  }
}

export interface VariantDefinition<V extends Record<string, readonly string[]>> {
  base: string
  variants: V
  defaults?: Partial<{ [K in keyof V]: V[K][number] }>
}

export function createVariants<V extends Record<string, readonly string[]>>(
  definition: VariantDefinition<V>,
) {
  type VariantProps = {
    [K in keyof V]?: V[K][number]
  } & {
    modifiers?: Record<string, boolean | undefined>
  }

  return (props: VariantProps = {}) => {
    const classes = [definition.base]

    const mergedProps = {
      ...(definition.defaults ?? {}),
      ...Object.fromEntries(Object.entries(props).filter(([_, value]) => value !== undefined)),
    }

    Object.entries(mergedProps).forEach(([key, value]) => {
      if (key !== 'modifiers' && value) {
        classes.push(`${definition.base}--${value}`)
      }
    })

    if (props.modifiers) {
      Object.entries(props.modifiers).forEach(([modifier, enabled]) => {
        if (enabled) {
          classes.push(`${definition.base}--${modifier}`)
        }
      })
    }

    return classes.join(' ')
  }
}

export type VariantPropsOf<T extends ReturnType<typeof createVariants>> = T extends (
  props: infer P,
) => string
  ? P
  : never
