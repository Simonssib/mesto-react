function Card({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <div className="elements__item">
      <img
        alt={card.name}
        src={card.link}
        onClick={handleCardClick}
        className="elements__photo"
      />
      <button className="elements__button-delete" type="button"></button>
      <h2 className="elements__paragraph">{card.name}</h2>
      <div className="elements__group-like">
        <button className="elements__button-like" type="button"></button>
        <p className="elements__number-like">{card.likes.length}</p>
      </div>
    </div>
  );
}

export default Card;
