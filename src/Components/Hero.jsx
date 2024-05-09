import React, { useEffect, useState } from "react";
import "./Hero.css";
export const Hero = () => {
  //   const [value, setValue] = useState("");
  const [display, setDisplay] = useState("");
  const [input, setInput] = useState("");

  const handleNumberClick = (num) => {
    setDisplay(display + num);
  };
  console.log(display);

  const handleOperatorClick = (operator) => {
    if (display.includes(".") && operator === ".") {
      return display;
    } else {
      setDisplay(display + operator);
    }
  };

  const handleOnAC = () => {
    setDisplay("");
  };
  const handleOnC = () => {
    setDisplay(display.substring(0, display.length - 1));
  };
  const handleOnEqual = () => {
    setDisplay(eval(display).toString());
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
        <div
          onClick={() => {
            handleOperatorClick(".");
          }}
          name="dot"
          className="dot"
        >
          .
        </div>
        <div onClick={handleOnEqual} name="equal" className="equal">
          =
        </div>
      </div>
    </>
  );
};
