import { useState } from 'react';
import { getListWords } from './utils';

import './Game.css';
import { Card } from './Components/Card';

const Game = () => {
  const [listWords, setListWords] = useState(getListWords());

  const cardHandler = (propsCard) => {
    const { text, back } = propsCard;
    const index = listWords.findIndex(word => word.text === text);

    listWords[index].back = !back;
    setListWords([...listWords]);
  };

  return (
    <div className="container">
      {listWords.map((wordProps, i) => <Card
        key={i}
        onClick={cardHandler}
        {...wordProps}
      />)}
    </div>
  );
}

export {
  Game,
}
