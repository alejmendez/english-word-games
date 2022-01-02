import './Card.css';

const Card = (props) => {
  let { color, text, back, onClick } = props;

  const classList = `card ${color} ${back ? 'back' : ''}`;
  const handleClick = () => onClick(props);

  return (
    <div
      className={classList}
      onClick={handleClick}
    >
      <div className="text">{text}</div>
    </div>
  );
}

export { Card };
