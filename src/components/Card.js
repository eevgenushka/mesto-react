import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div id="elements-template">
      <article className="element">
        <button className="element__basket" type="button"></button>
        <img
          className="element__item"
          style={{
            backgroundImage: `url(${props.card.link})`,
          }}
          onClick={handleClick}
        />
        <div className="element__description">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__like-container">
            <button
              className="element__button"
              type="button"
              aria-label="like"
            ></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
