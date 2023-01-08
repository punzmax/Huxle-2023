import { describe, it, expect } from "vitest";

import { WordHelper } from "@/helpers/WordHelper";

describe("WordHelper", () => {
  it("add letter to word", () => {
    let word: Array<string> = [" ", " ", " ", " ", " "];
    word = WordHelper.addLetter(word, "H");

    expect(word).toEqual(["H", " ", " ", " ", " "]);
  });

  it("remove letter from word", () => {
    let word: Array<string> = ["H", "E", "L", "L", "O"];
    word = WordHelper.removeLetter(word);

    expect(word).toEqual(["H", "E", "L", "L", " "]);
  });
});
