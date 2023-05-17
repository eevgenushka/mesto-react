import React from "react";

function PopupWithForm({ name, title, buttonText, isOpen, onClose, ...props }) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={() => onClose(false)}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__button-close"
          name="popupCloseButton"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        />

        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name={name} id={name} noValidate="">
          {props.children}

          <button className="popup__button popup__button-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
