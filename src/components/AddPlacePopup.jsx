import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({  }) {

    return (
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
    )
  }