import { capitalize } from 'lodash';
import './Card.scss';

const Card = (props) => {
  let { color, text, back, selected, onClick } = props;

  const classList = `card ${back ? 'back' : ''} ${selected ? 'selected' : ''}`;
  const classListCardFront = `card-front card-${color}`;
  const handleClick = () => onClick(props);

  text = capitalize(text);

  return (
    <div
      className={classList}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className={classListCardFront}>
          <span>{text}</span>
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
}

export { Card };
