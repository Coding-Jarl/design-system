declare global {
	/**
	 * Forces an array to have at least 1 elt
	 *
	 * @example
	 * type T = AtLeastOne<string> // T = [string, ...string[]]
	 *
	 * @example
	 * type T = AtLeastOne<number, 5> // T = [5, ...number[]]
	 */
	type NonEmptyArray<T, First extends T = T> = [First, ...T[]];
}

export {};
