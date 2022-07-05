import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ImagePopup from "./ImagePopup.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import "../index.css";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([data]) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  const handleUpdateUser = (newInfo) => {
    api.editUserInfo(newInfo.name, newInfo.about)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  const handleUpdateAvatar = (newInfo) => {
    api.editUserAvatar(newInfo.avatar)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}>
      </EditProfilePopup>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}>
      </EditAvatarPopup>

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
    </CurrentUserContext.Provider>
  );
}

export default App;
