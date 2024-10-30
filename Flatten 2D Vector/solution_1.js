class Vector2D {
  /**
   * @param {number[][]} vec
   */
  constructor(vec) {
    this.vector = vec;
    this.lastPosition = [0, -1];
  }

  #hasElement(i, j) {
    return Array.isArray(this.vector[i]) && Number.isInteger(this.vector[i][j]);
  }

  #getNextElement(movePointer) {
    let [i, j] = this.lastPosition;
    while (Array.isArray(this.vector[i])) {
      j = j >= 0 ? j + 1 : 0;
      if (this.#hasElement(i, j)) {
        if (movePointer) {
          this.lastPosition = [i, j];
        }
        return this.vector[i][j];
      }

      i++;
      j = -1; // undefined
    }
  }

  /**
   * @return {number}
   */
  next() {
    clog("next", this);
    // return next element and move to the next
    return this.#getNextElement(true);
  }
  /**
   * @return {boolean}
   */
  hasNext() {
    clog("hasNext", this);
    return Number.isInteger(this.#getNextElement(false));
  }
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// testing
// const clog = () => {};
const clog = console.log;
const TesterFn = (commands, results) => {
  let obj;
  return results.map((v, i) => {
    if (commands[i] === "Vector2D") {
      obj = new Vector2D(v[0]);
      return null;
    }
    return obj[commands[i]]();
  });
};

clog(
  TesterFn(
    [
      "Vector2D",
      "next",
      "next",
      "next",
      "hasNext",
      "hasNext",
      "next",
      "hasNext",
    ],
    [[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
  )
);

clog(
  TesterFn(
    [
      "Vector2D",
      "hasNext",
      "next",
      "hasNext",
      "next",
      "hasNext",
      "next",
      "hasNext",
      "next",
      "hasNext",
      "next",
      "hasNext",
      "next",
      "hasNext",
    ],
    [
      [[[1, 2], [3], [4, 5, 6]]],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ]
  )
);

clog(TesterFn(["Vector2D", "hasNext"], [[[[]]], []]));

clog(
  TesterFn(
    ["Vector2D", "hasNext", "next", "hasNext"],
    [[[[], [3]]], [], [], []]
  )
);
