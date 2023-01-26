import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const inputRef = useRef();

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const enteredValue = inputRef.current.value;

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    console.log(enteredValue);

    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          value={enteredName}
        />
      </div>
      {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
