import { capitalize } from 'lodash';
import './Card.css';

const Card = (props) => {
  let { color, text, back, onClick } = props;

  const classList = `card card-${color} ${back ? 'back' : ''}`;
  const handleClick = () => onClick(props);

  text = capitalize(text);

  return (
    <div
      className={classList}
      onClick={handleClick}
    >
      <div className="inline-block align-middle">{text}</div>
    </div>
  );
}

export { Card };
