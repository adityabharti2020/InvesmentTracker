import React, { useState } from "react";
import classes from "./UseInput.module.css";

const initialUserInput = {
  "current-savings": 500,
  "yearly-contribution": 6000,
  "expected-return": 1500,
  duration: 5,
};
const UserInput = (props) => {
  const [inputUser, setinputuser] = useState(initialUserInput);
  const Formsubmithandler = (event) => {
    event.preventDefault();
    props.onCalculate(inputUser);
  };
  const resetbtnhandler = () => {
    setinputuser(initialUserInput);
    
  };
  const inputChangeHandler = (inputId, Value) => {
    setinputuser((previnput) => {
      return {
        ...previnput,
        [inputId]: +Value,
      };
    });
  };
  return (
    <form className={classes.form} onSubmit={Formsubmithandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={inputUser["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            id="yearly-contribution"
            value={inputUser["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            id="expected-return"
            value={inputUser["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={inputUser["duration"]}
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          onClick={resetbtnhandler}
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
