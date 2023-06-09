import React, { useState, useEffect } from "react";

const Home = () => {
  const [color, setColor] = useState("");
  const [cycleActive, setCycleActive] = useState(false);
  const [purpleActive, setPurpleActive] = useState(false);

  const handleClick = (clickedColor) => {
    setColor(clickedColor === color ? "" : clickedColor);
  };

  const handleCycleClick = () => {
    setCycleActive((prevState) => !prevState);
  };

  const handleAddPurple = () => {
    setPurpleActive(true);
  };

  const colorOrder = ["red", "green", "yellow", "purple"];
  let intervalId;

  const cycleColors = () => {
    setColor((prevColor) => {
      const currentIndex = colorOrder.indexOf(prevColor);
      const nextIndex = (currentIndex + 1) % colorOrder.length;
      return colorOrder[nextIndex];
    });
  };

  useEffect(() => {
    if (cycleActive) {
      intervalId = setInterval(cycleColors, 1500);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [cycleActive]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-around">
      <div id="box1"></div>
      <div className="d-flex flex-column align-items-center" id="box">
        <div
          className={"red" + (color === "red" ? " clicked" : "")}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={"green" + (color === "green" ? " clicked" : "")}
          onClick={() => handleClick("green")}
        ></div>
        <div
          className={"yellow" + (color === "yellow" ? " clicked" : "")}
          onClick={() => handleClick("yellow")}
        ></div>
        {purpleActive && (
          <div
            className={"purple" + (color === "purple" ? " clicked" : "")}
            onClick={() => handleClick("purple")}
          ></div>
        )}
      </div>
      <button className="button-85" role="button" onClick={handleCycleClick}>
        {cycleActive ? "Stop Cycling" : "Start Cycling"}
      </button>
      <button className="button-53" role="button" onClick={handleAddPurple}>
        Add Purple
      </button>
    </div>
  );
};

export default Home;
