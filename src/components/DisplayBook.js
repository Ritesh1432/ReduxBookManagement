import React from "react";
import "../css/Display.css";

function DisplayBook(props) {
  return (
    <div className="displayCard">
      <img
        src={props.value.imgsrc}
        alt={props.value.title}
        className="bookImageClass"
      />
      <p className="bookTitleClass">{props.value.title}</p>

      <p className="bookTextClass">
        <b>Author:</b>&nbsp;
        {props.value.author}
      </p>
      <p className="bookTextClass">
        <b>Price:</b>&nbsp;
        {props.value.price}
      </p>
      <p className="bookTextClass">
        <b>Description:</b>&nbsp;
        {props.value.desc}
      </p>
    </div>
  );
}

export default DisplayBook;
