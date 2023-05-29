import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

	const currentUser = useContext(CurrentUserContext);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	function handleChangeName(e) {
		setName(e.target.value)
	};

	function handleChangeDescription(e) {
		setDescription(e.target.value)
	};

    function handleSubmit(e) {
        e.preventDefault();
		onUpdateUser({
			name,
			about: description,
        });
	};

      useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser, isOpen]);

    return (
        <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isOpen}
		onClose={onClose}
		onSubmit={handleSubmit}
      >
        <input
          id="username"
          type="text"
          name="username"
          className="popup__input popup__input_type_name"
          placeholder="Укажите имя"
          value={name || ''}
          onChange={handleChangeName}
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
          value={description || ''}
		  onChange={handleChangeDescription}
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__error" id="job-input-error">
          Заполните это поле
        </span>
      </PopupWithForm>
    );
};
export default EditProfilePopup;