/**
 * Cactus stack class.
 *
 * @implements CactusStackNode<T>
 */
export class CactusStack<T> implements CactusStackNode<T> {
  /**
   * Parent node, or undefined for top of stack.
   *
   * @type {CactusStack<T> | undefined}
   */
  private parent?: CactusStack<T>

  /**
   * The value of this node.
   *
   * @type {T | undefined}
   */
  value?: T

  /**
   * Constructors an instance of Cactus stack.
   *
   * @param {CactusStack<T> | undefined} parent parent node
   * @param {T | undefined} value value
   */
  constructor(
    parent?: CactusStack<T>,
    value?: T,
  ) {
    if (parent instanceof CactusStack)
      this.parent = parent
    if (value !== undefined)
      this.value = value
  }

  /**
   * Removes this element from cactus stack and returns it,
   * if the cactus stack is empty,
   * an instance of CactusStackError is returned
   * and the cactus stack is not modified.
   *
   * @returns {CactusStackError | T} The value, or an instance of CactusStackError
   */
  pop(): CactusStackError | T {
    if (this.parent === undefined)
      return new CactusStackError()
    const value = this.value
    delete this.parent
    delete this.value
    return value
  }

  /**
   * Appends new element to this cactus stack
   * and returns the new node.
   *
   * @param {T} value New value to add to the cactus stack
   * @returns {CactusStackNode<T>} New node
   */
  push(
    value: T,
  ): CactusStackNode<T> {
    return new CactusStack(this, value)
  }

  /**
   * Returns an iterator.
   *
   * @returns {Iterator<CactusStackNode<T>>} An iterator
   */
  [Symbol.iterator](): Iterator<CactusStackNode<T>> {
    return function* (cursor: CactusStack<T>) {
      for (let parent = cursor.parent;
        cursor.parent !== undefined;
        cursor = parent, parent = cursor.parent)
        yield cursor
    }(this)
  }
}

/**
 * Error class for Cactus stack
 *
 * @extends Error
 */
export class CactusStackError extends Error {
  /**
   * Constructs an instance of error for Cactus stack.
   */
  constructor() {
    super('empty')
  }
}

/**
 * Interface for Cactus stack
 *
 * @extends Iterable<CactusStackNode<T>>
 */
export interface CactusStackNode<T> extends Iterable<CactusStackNode<T>> {
  /**
   * Removes this element from cactus stack and returns it,
   * if the cactus stack is empty,
   * an instance of CactusStackError is returned
   * and the cactus stack is not modified.
   *
   * @returns {CactusStackError | T} The value, or an instance of CactusStackError
   */
  pop(): CactusStackError | T

  /**
   * Appends new element to this cactus stack
   * and returns the new node.
   *
   * @param {T} value New value to add to the cactus stack
   * @returns {CactusStackNode<T>} New node
   */
  push(value: T): CactusStackNode<T>
}
