import { useState } from "react";
import "./Hero.css";

const operator = ["+", "-", "/", "*", "%"];
// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
export const Hero = () => {
  const [display, setDisplay] = useState("");

  const [lastOperator, setLastOperator] = useState("");

  const handleNumberClick = (num) => {
    //add the number to the display
    setDisplay(display + num);
  };

  const handleOperatorClick = (op) => {
    //saving the last operator
    setLastOperator(op);
    //find last character
    const lastChar = display.charAt(display.length - 1);
    if (operator.includes(lastChar)) {
      //check if last character is equal to the operator input received
      if (lastChar === op) {
        return;
      } else {
        //remove the last operator from the string and paste new operator
        const cutDisplay = display.slice(0, -1);
        setDisplay(cutDisplay + op);
      }
    } else {
      setDisplay(display + op);
    }
  };

  const handleDotClick = () => {
    //find the last index of operator
    const lastIndexOfOperator = display.lastIndexOf(lastOperator);
    //get the string after the last operator
    const stringAfterOperator = display.slice(lastIndexOfOperator);
    if (
      //leaving no case of ".3" but "0.3" to make it look better
      operator.includes(display.charAt(display.length - 1)) ||
      display === ""
    ) {
      return setDisplay(display + "0.");
    }
    if (stringAfterOperator.includes(".")) {
      return;
    }
    // don't let the case of "22.22.22" happen by checking if there is no operator and "." already exists
    if (lastOperator === "" && display.includes(".")) {
      return;
    } else {
      return setDisplay(display + ".");
    }
  };

  const handleOnAC = () => {
    //clear the display
    setDisplay("");
  };
  const handleOnC = () => {
    //remove the last character
    setDisplay(display.substring(0, display.length - 1));
  };
  const handleOnEqual = () => {
    //check of the last character is operator and removes it before calculating
    if (operator.includes(display.charAt(display.length - 1))) {
      const cutDisplay = display.slice(0, -1);
      return setDisplay(eval(cutDisplay).toString());
    } else {
      console.log(typeof display);
      return setDisplay(eval(display).toString());
    }
  };
  return (
    <>
      <div className="container">
        <div name="" className="display">
          {display}
        </div>
        <div onClick={handleOnAC} name="AC" className="AC">
          AC
        </div>
        <div onClick={handleOnC} name="C" className="C">
          C
        </div>
        <div
          onClick={() => {
            handleOperatorClick("%");
          }}
          name="per"
          className="per"
        >
          %
        </div>
        <div
          onClick={() => {
            handleOperatorClick("/");
          }}
          name="division"
          className="division"
        >
          /
        </div>
        <div
          onClick={() => {
            handleNumberClick(7);
          }}
          name="seven"
          className="seven"
        >
          7
        </div>
        <div
          onClick={() => {
            handleNumberClick(8);
          }}
          name="eight"
          className="eight"
        >
          8
        </div>
        <div
          onClick={() => {
            handleNumberClick(9);
          }}
          name="nine"
          className="nine"
        >
          9
        </div>
        <div
          onClick={() => {
            handleOperatorClick("*");
          }}
          name="mul"
          className="mul"
        >
          *
        </div>
        <div
          onClick={() => {
            handleNumberClick(4);
          }}
          name="four"
          className="four"
        >
          4
        </div>
        <div
          onClick={() => {
            handleNumberClick(5);
          }}
          name="five"
          className="five"
        >
          5
        </div>
        <div
          onClick={() => {
            handleNumberClick(6);
          }}
          name="six"
          className="six"
        >
          6
        </div>
        <div
          onClick={() => {
            handleOperatorClick("-");
          }}
          name="minus"
          className="minus"
        >
          -
        </div>
        <div
          onClick={() => {
            handleNumberClick(1);
          }}
          name="one"
          className="one"
        >
          1
        </div>
        <div
          onClick={() => {
            handleNumberClick(2);
          }}
          name="two"
          className="two"
        >
          2
        </div>
        <div
          onClick={() => {
            handleNumberClick(3);
          }}
          name="three"
          className="three"
        >
          3
        </div>
        <div
          onClick={() => {
            handleOperatorClick("+");
          }}
          name="plus"
          className="plus"
        >
          +
        </div>
        <div
          onClick={() => {
            handleNumberClick(0);
          }}
          name="zero"
          className="zero"
        >
          0
        </div>
        <div onClick={handleDotClick} name="dot" className="dot">
          .
        </div>
        <div onClick={handleOnEqual} name="equal" className="equal">
          =
        </div>
      </div>
    </>
  );
};
