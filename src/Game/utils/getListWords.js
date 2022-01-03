import { getListColors } from './getListColors';
import { getListWordsPair } from './getListWordsPair';
import { getPlainWordLists } from './getPlainWordLists';

const numberOfWords = 6;

const getListWords = () => {
  const listColors = getListColors();
  const wordsGroup = getListWordsPair();
  const listWords = getPlainWordLists(numberOfWords, wordsGroup, listColors);

  return listWords;
}

export {
  getListWords,
};
