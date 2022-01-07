import { shuffle } from 'lodash';

const validateParams = (options) => {
  options.cardProps = options.cardProps || {};
  options.numberOfWords = options.numberOfWords || 6;
  options.shuffleWords = options.shuffleWords ?? true;

  options.listColors = shuffle(options.listColors);
  options.wordsGroup = shuffle(options.wordsGroup);
  return options;
};

const generateCardProps = (defaultProps, color, word, text) => {
  return {
    color,
    back: true,
    selected: false,
    word,
    text,
    ...defaultProps,
  };
}

const getGroupedWordLists = (options) => {
  let {
    cardProps,
    numberOfWords,
    shuffleWords,
    wordsGroup,
    listColors
  } = validateParams(options);

  const listWords = [
    [],
    [],
  ];

  for (let i = 0; i < numberOfWords; i++) {
    const wordPair = wordsGroup[i];
    listWords[0].push(generateCardProps(cardProps, listColors[0], wordPair[0], wordPair[0]));
    listWords[1].push(generateCardProps(cardProps, listColors[1], wordPair[0], wordPair[1]));
  }

  if (shuffleWords) {
    return [
      shuffle(listWords[0]),
      shuffle(listWords[1]),
    ];
  }
  return listWords;
};

const getPlainWordLists = (options) => {
  let {
    cardProps,
    numberOfWords,
    shuffleWords,
    wordsGroup,
    listColors
  } = validateParams(options);

  const listWords = [];

  for (let i = 0; i < numberOfWords; i++) {
    const wordPair = wordsGroup[i];
    const color = listColors[i];

    listWords.push(generateCardProps(cardProps, color, wordPair[0], wordPair[0]));
    listWords.push(generateCardProps(cardProps, color, wordPair[0], wordPair[1]));
  }

  if (shuffleWords) {
    return shuffle(listWords);
  }
  return listWords;
};

export {
  getGroupedWordLists,
  getPlainWordLists,
}
