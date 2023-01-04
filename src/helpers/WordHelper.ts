export class WordHelper {
  static addLetter = (word: Array<string>, letter: string) => {
    for (const index in word) {
      if (!word[index].trim()) {
        word[index] = letter;
        break;
      }
    }

    return word;
  };

  static removeLetter = (word: Array<string>, amount: number = 1) => {
    let lastIndex: number = 0;

    for (const index in word) {
      if (!word[index].trim()) {
        break;
      }

      lastIndex++;
    }

    lastIndex -= amount;

    if (lastIndex >= 0) {
      word.fill(" ", lastIndex);
    }

    return word;
  };
}
