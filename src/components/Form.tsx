import React, { useState } from "react";
import { MyState as Props } from "../App";

interface MyState {
  form: Props["form"];
  setForm: React.Dispatch<React.SetStateAction<Props["form"]>>;
}

const Form: React.FC<MyState> = ({ form, setForm }) => {
  const [input, setInput] = useState({
    name: "",
    time: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!input.name || !input.time) {
      return;
    }
    setForm([
      ...form,
      {
        name: input.name,
        time: parseInt(input.time),
        comment: input.comment,
      },
    ]);
    setInput({
      name: "",
      time: "",
      comment: "",
    });
  };

  return (
    <div>
      <form className="">
        <div className="first formDiv">
          <div>
            <h3>Add A task</h3>
            <input
              className="inputBox"
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3>Add a time</h3>
            <input
              className="inputBox rating"
              type="number"
              name="time"
              value={input.time}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div>
          <h3>Enter your comment</h3>
          <textarea
            className="inputBox"
            name="comment"
            value={input.comment}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <button
          className="button"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
