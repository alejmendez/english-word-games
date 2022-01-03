import { shuffle } from 'lodash';

const getPlainWordLists = (numberOfWords, wordsGroup, listColors) => {
  const listWords = [];
  listColors = shuffle(listColors);
  wordsGroup = shuffle(wordsGroup);

  for (let i = 0; i < numberOfWords; i++) {
    const wordPair = wordsGroup[i];
    const color = listColors[i];
    const word = {
      color,
      back: true,
      word: wordPair[0],
      text: wordPair[0],
    };

    listWords.push(word);
    listWords.push({
      ...word,
      text: wordPair[1],
    });
  }

  return shuffle(listWords);
}

export {
  getPlainWordLists,
}
