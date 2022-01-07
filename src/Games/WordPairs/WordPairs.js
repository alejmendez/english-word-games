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

let cardSelected = [null, null];

const WordPairs = () => {
  const listColors = getListColors();
  const wordsGroup = getListWordsPair();

  const [listWords, setListWords] = useState(getGroupedWordLists({
    ...gameOptions,
    wordsGroup,
    listColors,
  }));

  const [listWordsMatched, setListWordsMatched] = useState([]);
  const selectCard = (cardSelected) => {
    const listWordsCopy = [...listWords];
    const sideIndex = cardSelected.side === 'left' ? 0 : 1;
    listWordsCopy[sideIndex] = listWordsCopy[sideIndex].map(card => {
      card.selected = card.word === cardSelected.word;
      return card;
    });

    setListWords([...listWordsCopy]);
  }

  const deselectCards = () => {
    const listWordsCopy = [...listWords].map(group => {
      return group.map(card => {
        card.selected = false;
        return card;
      });
    });

    setListWords([...listWordsCopy]);
  }

  const cardHandler = (card) => {
    if (card.side === 'left') {
      cardSelected[0] = card;
      selectCard(card);
    }

    if (card.side === 'right') {
      cardSelected[1] = card;
      selectCard(card);
    }

    if (!cardSelected[0] || !cardSelected[1]) {
      return;
    }

    if (cardSelected[0].word !== cardSelected[1].word) {
      cardSelected = [null, null];
      deselectCards();
      return;
    }

    const newCard = {...card};
    newCard.color = 'sky';
    newCard.text = `${cardSelected[0].text} - ${cardSelected[1].text}`;
    const newListWords = [
      [...listWords[0]].filter(item => item.word !== newCard.word),
      [...listWords[1]].filter(item => item.word !== newCard.word),
    ];
    setListWordsMatched([...listWordsMatched, newCard]);
    setListWords([...newListWords]);
    cardSelected = [null, null];
  };

  return (
    <Container className="word-pairs-game" fluid="md">
      <Row>
        <Col className='text-center word-pairs-group-1'>
          {listWords[0].map((wordProps, i) => <Card
            key={i}
            index={i}
            side='left'
            onClick={cardHandler}
            {...wordProps}
          />)}
        </Col>
        <Col className='text-center word-pairs-group-result'>
          {listWordsMatched.map((wordProps, i) => <Card
            key={i}
            index={i}
            onClick={() => { }}
            {...wordProps}
          />)}
        </Col>
        <Col className='text-center word-pairs-group-2'>
          {listWords[1].map((wordProps, i) => <Card
            key={i}
            index={i}
            side='right'
            onClick={cardHandler}
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
