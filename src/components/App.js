import React, { useState } from "react";

import "../index.css";
import logo from "../images/logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpened] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpened] = useState(false);
  const [isEditProfilePopupOpen, setEditProfileOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpened(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpened(true);
  }

  function handleEditProfileClick() {
    setEditProfileOpened(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpened(false);
    setAddPlacePopupOpened(false);
    setEditProfileOpened(false);
    setSelectedCard(null);
  }
  return (
    <div className="page">
      <Header logo={logo} />
      <Main
        onCardClick={handleCardClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="username"
          type="text"
          name="username"
          className="popup__input popup__input_type_name"
          placeholder="Укажите имя"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__error" id="name-input-error">
          Заполните это поле{" "}
        </span>
        <input
          id="job-input"
          type="text"
          name="job"
          className="popup__input popup__input_type_job"
          placeholder="Укажите профессию"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__error" id="job-input-error">
          Заполните это поле
        </span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="description"
          type="text"
          name="description"
          className="popup__input popup__input_type_place"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__error" id="title-input-error">
          Вы пропустили это поле.
        </span>
        <input
          id="link"
          type="url"
          name="link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="popup__error" id="link-input-error">
          Введите адрес сайта.
        </span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="avatar"
          type="url"
          name="avatar"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="popup__error" id="avatar-error">
          Введите адрес сайта.
        </span>
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />
    </div>
  );
}
export default App;
