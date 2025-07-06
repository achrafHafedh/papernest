import { reverse } from "../../../src/lib/utils/array";

describe("reverse array of number", () => {
  const array = [7, 3];
  const arraySorted = [3, 7];
  it("order by desc", () => {
    expect(reverse(array)).toStrictEqual(arraySorted);
  });
});
