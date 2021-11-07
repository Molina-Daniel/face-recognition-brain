import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = (props) => {
  return (
    <div className="ma4 mt0">
      <p className="f3">
        {"I will detect faces in your pictures using AI. Give it a try"}
      </p>
      <div className="center">
        <form
          onSubmit={props.onSubmit}
          className="form center pa4 br3 shadow-5"
        >
          <input
            className="f4 pa2 fl w-80 center"
            type="text"
            onChange={props.onInputChange}
          />
          <button className="fl w-auto grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageLinkForm;
