declare global {
  interface ArrayConstructor {
    /**
     * Check if `value` is an array.
     *
     * @template {any} T
     *  The array item type
     *
     * @param {unknown} value
     *  The value to check
     * @return {value is ReadonlyArray<T> | T[]}
     *  `true` if `value` is an array, `false` otherwise
     */
    isArray<T>(value: unknown): value is T[] | readonly T[]
  }

  interface ObjectConstructor {
    /**
     * Create an object with the specified prototype.
     *
     * @template {object | null} T
     *  The object to use as a prototype
     * @template {any} [U=T]
     *  The created object
     *
     * @param {T} o
     *  The object to use as a prototype; may be `null`
     * @param {PropertyDescriptorMap & ThisType<T>} [properties]
     *  The property descriptor map
     * @return {U}
     *  The created object
     */
    create<T extends object | null = object | null, U = T>(
      o: T,
      properties?: PropertyDescriptorMap & ThisType<T>
    ): U
  }
}

export {}
