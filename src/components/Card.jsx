import {useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `${isOwn ? 'elements__button-delete' : 'elements__button-delete_hidden'}`
  )
  const isLiked = card.likes.some( i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `${isOwn ? 'elements__button-like' : 'elements__button-like_hidden'}`
  )
  
  const handleCardClick = () => {
    onCardClick(card);
  };
  const handleLikeClick = () => {
    onCardLike(card);
  }
  const handleDeleteClick = () => {
    onCardDelete(card);
  }

  return (
    <div className="elements__item">
      <img
        alt={card.name}
        src={card.link}
        onClick={handleCardClick}
        className="elements__photo"
      />
      <button className="elements__button-delete" type="button" onClick={handleDeleteClick}></button>
      <h2 className="elements__paragraph">{card.name}</h2>
      <div className="elements__group-like">
        <button className="elements__button-like" type="button" onClick={handleLikeClick}></button>
        <p className="elements__number-like">{card.likes.length}</p>
      </div>
    </div>
  );
}

export default Card;
