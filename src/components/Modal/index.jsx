import { useState, useEffect } from "react";

/**
 *
 * @param props list : text, display, buttonDisplay,width, height, bgColor, margin...
 * @returns a custom modal
 */
const Modal = (props) => {
  const [modal, setModal] = useState(props.display);
  const onButton = () => {
    setModal("none");
  };

  useEffect(() => {
    const showModal = props.display ? "block" : "none";
    setModal(showModal);
  }, [props.display]);

  let buttonDisplay = "none";

  if (props.button) {
    buttonDisplay = "inline-block";
  }

  return (
    <div className="modal-container" style={{ display: modal }}>
      <div
        className="modal"
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.bgColor,
          margin: props.margin,
        }}
      >
        <span className="close" onClick={onButton}>
          &times;
        </span>
        <p>{props.text}</p>
        <button
          className="modalBtn"
          style={{
            display: buttonDisplay,
            width: props.buttonWidth,
            height: props.buttonHeight,
            backgroundColor: props.buttonBgColor,
            border: props.buttonBorder,
            margin: props.buttonMargin,
            padding: props.buttonPadding,
          }}
          onClick={onButton}
        >
          {" "}
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
