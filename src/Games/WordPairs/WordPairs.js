import { useState } from 'react';
import { getListColors, getListWordsPair, getGroupedWordLists } from '../../Utils';
import { Container, Row, Col } from 'react-bootstrap';

import './WordPairs.scss';
import { Card } from '../Components/Card';

const numberOfWords = 10;

const gameOptions = {
  numberOfWords,
  cardProps: {
    back: false,
  }
};

let cardLeftSelected = '';
let cardRightSelected = '';

const WordPairs = () => {
  const listColors = getListColors();
  const wordsGroup = getListWordsPair();

  const [listWords, setListWords] = useState(getGroupedWordLists({
    ...gameOptions,
    wordsGroup,
    listColors,
  }));

  const [listWordsMatched, setListWordsMatched] = useState([]);

  const cardHandlerLeft = (propsCard) => {
    cardLeftSelected = propsCard.word;
  };

  const cardHandlerRight = (propsCard) => {
    cardRightSelected = propsCard.word;
  };

  return (
    <Container className="word-pairs-game" fluid="md">
      <Row>
        <Col>
          {listWords[0].map((wordProps, i) => <Card
            key={i}
            index={i}
            onClick={cardHandlerLeft}
            {...wordProps}
          />)}
        </Col>
        <Col>
        </Col>
        <Col>
          {listWords[1].map((wordProps, i) => <Card
            key={i}
            index={i}
            onClick={cardHandlerRight}
            {...wordProps}
          />)}
        </Col>
      </Row>
    </Container>
  );
}

export {
  WordPairs,
}
