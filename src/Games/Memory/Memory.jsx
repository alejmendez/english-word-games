import { useState } from 'react';
import { getListColors, getListWordsPair, getPlainWordLists } from '../../Utils';
import { Container, Row, Col } from 'react-bootstrap';

import './Memory.scss';
import { Card } from '../Components/Card';

let prevWordSelect = false;
let prevIndex = false;
let block = false;

const numberOfWords = 6;

const gameOptions = {
  numberOfWords,
};

const Memory = () => {
  const listColors = getListColors();
  const wordsGroup = getListWordsPair();

  const [listWords, setListWords] = useState(getPlainWordLists({
    ...gameOptions,
    wordsGroup,
    listColors,
  }));

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
    <Container className="memory-game" fluid="md">
      <Row>
        <Col>
          {listWords.map((wordProps, i) => <Card
            key={i}
            index={i}
            onClick={cardHandler}
            {...wordProps}
          />)}
        </Col>
      </Row>
    </Container>
  );
}

export {
  Memory,
}
