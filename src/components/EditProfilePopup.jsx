import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
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
          onChange={handleNameChange}
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
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error profession-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
