const getPlainWordLists = (wordsGroup, listColors) => {
  const listWords = [];
  for (let i = 0; i < wordsGroup.length; i++) {
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

  const shuffledListWords = [...listWords].sort((a, b) => 0.5 - Math.random());
  return shuffledListWords;
}

export {
  getPlainWordLists,
}
