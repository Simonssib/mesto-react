import { useState } from "react";
import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ImagePopup from "./ImagePopup.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import "../index.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        title="Новое место"
        name="post"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <label className="popup__input-container">
          <input
            id="title-input"
            type="text"
            name="name"
            required
            className="popup__field popup__field_text_title"
            placeholder="Название места"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error title-input-error"></span>
        </label>
        <label className="popup__input-container">
          <input
            id="link-input"
            type="url"
            name="link"
            required
            className="popup__field popup__field_text_link"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <label className="popup__input-container">
          <input
            id="name-input"
            type="text"
            name="name"
            className="popup__field popup__field_text_name"
            defaultValue="Жак-Ив Кусто"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__input-container">
          <input
            id="profession-input"
            type="text"
            name="profession"
            className="popup__field popup__field_text_profession"
            defaultValue="Исследователь океана"
            placeholder="Профессия"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error profession-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <label className="popup__input-container">
          <input
            id="avatar-input"
            type="url"
            name="link"
            required
            className="popup__field popup__field_avatar_link"
            placeholder="Ссылка на аватар"
          />
          <span className="popup__input-error avatar-input-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <div className="popup popup-confirm">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__confirm" type="submit" name="submit">
            Да
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
