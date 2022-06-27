import { useEffect, useState } from 'react';
import React from 'react';
import '../index.css';
import api from '../utils/api.js';
import Card from './Card.jsx';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
          .then(([cards, data]) => {
              setUserName(data.name);
              setUserDescription(data.about);
              setUserAvatar(data.avatar);
              setCards(cards);
          })
          .catch(err => console.log(err))
    }, []);

    return (
        <>
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img alt="Аватар" className="profile__avatar" src={userAvatar} />
                    <button onClick={onEditAvatar} type="button" className="profile__edit-avatar"></button>
                </div>

                <div className="profile__info">
                    <div className="profile__info-edit">
                        <h1 className="profile__name">{userName}</h1>
                        <button onClick={onEditProfile} className="profile__button-edit" type="button"></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} className="profile__button-add" type="button"></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card 
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick} />
                ))}
            </section>
        </main>
        </>
        
    )
}

export default Main;