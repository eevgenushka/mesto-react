import React, { useEffect, useRef } from "react";

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const cardNameRef = useRef(null);
  const cardLinkRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  useEffect(() => {
    cardNameRef.current.value = '';
    cardLinkRef.current.value = '';
  }, [isOpen]);

	return (
        <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isOpen}
		onClose={onClose}
		onSubmit={handleSubmit}
      >
        <input
          id="description"
          type="text"
          name="description"
          ref={ cardNameRef }
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
          ref={ cardLinkRef }
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="popup__error" id="link-input-error">
          Введите адрес сайта.
        </span>
      </PopupWithForm>
    );
    };

    export default AddPlacePopup