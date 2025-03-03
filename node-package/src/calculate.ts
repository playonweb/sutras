class SutraMatrix {
  private static readonly MATRIX: Map<string, number> = new Map([
    [[0, 0, 0, 0].toString(), 0],  [[1, 0, 0, 0].toString(), 1],
    [[0, 1, 0, 0].toString(), 2],  [[1, 1, 0, 0].toString(), 3],
    [[0, 0, 1, 0].toString(), 4],  [[1, 0, 1, 0].toString(), 5],
    [[0, 1, 1, 0].toString(), 6],  [[1, 1, 1, 0].toString(), 7],
    [[0, 0, 0, 1].toString(), 8],  [[1, 0, 0, 1].toString(), 9],
    [[0, 1, 0, 1].toString(), 10], [[1, 1, 0, 1].toString(), 11],
    [[0, 0, 1, 1].toString(), 12], [[1, 0, 1, 1].toString(), 13],
    [[0, 1, 1, 1].toString(), 14], [[1, 1, 1, 1].toString(), 15]
  ]);

  static score(u: number | boolean, i: number | boolean, e: number | boolean, p: number | boolean): number {
    // Convert boolean values to 0 or 1
    const values = [u, i, e, p].map(x => (x === true ? 1 : x === false ? 0 : x));

    // Validate inputs
    if (!values.every(x => x === 0 || x === 1)) {
      throw new Error("U, I, E, P should be binary values (0, 1, true, or false)");
    }

    return this.MATRIX.get(values.toString()) ?? -1;
  }
}

export default SutraMatrix;
