import { useState } from 'react';
import { getListWords } from './utils';

import './Game.scss';
import { Card } from './Components/Card';

let prevWordSelect = false;
let prevIndex = false;
let block = false;

const Game = () => {
  const [listWords, setListWords] = useState(getListWords());

  const cardHandler = (propsCard) => {
    if (block) {
      return;
    }
    const { index, word, back } = propsCard;

    listWords[index].back = !back;
    setListWords([...listWords]);

    if (prevWordSelect === false) {
      prevWordSelect = word;
      prevIndex = index;
      return;
    }

    if (prevWordSelect === word) {
      prevWordSelect = false;
      prevIndex = false;
      return;
    }

    block = true;
    setTimeout(() => {
      listWords[prevIndex].back = back;
      listWords[index].back = back;
      setListWords([...listWords]);
      prevWordSelect = false;
      prevIndex = false;
      block = false;
    }, 2000);
  };

  return (
    <div className="container">
      {listWords.map((wordProps, i) => <Card
        key={i}
        index={i}
        onClick={cardHandler}
        {...wordProps}
      />)}
    </div>
  );
}

export {
  Game,
}
