import { getListColors } from './getListColors';
import { getListWordsPair } from './getListWordsPair';
import { getPlainWordLists } from './getPlainWordLists';

const getListWords = () => {
  const listColors = getListColors();
  const wordsGroup = getListWordsPair();
  const listWords = getPlainWordLists(wordsGroup, listColors);

  return listWords;
}

export {
  getListWords,
};
