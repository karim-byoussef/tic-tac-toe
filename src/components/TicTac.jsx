import "../style/TicTac.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import { useRef, useState } from "react";
let data = ["", "", "", "", "", "", "", "", ""];

const TicTac = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleChange = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }
    checkwin();
  };
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleChange.current.innerHTML = `mabrouk alik :<img src=${cross_icon}>`;
    } else {
      titleChange.current.innerHTML = `mabrouk alik :<img src=${circle_icon}>`;
    }
  };
  const resetGame = () => {
    // Reset the board data
    data = ["", "", "", "", "", "", "", "", ""];

    // Reset the count and lock states
    setCount(0);
    setLock(false);

    // Clear the title and reset the board UI
    titleChange.current.innerHTML = "Tic Tac Toe game";

    // Reset the board cells visually
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.innerHTML = ""; // Clear each box
    });
  };
  return (
    <div className="container">
      <h1 className="title" ref={titleChange}>
        Tic Tac Toe game{" "}
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        reset
      </button>
    </div>
  );
};
export default TicTac;
