import React from "react";
import ReactDOM from "react-dom";

const name = "T-bug";

function currentYear() {
  return new Date().getFullYear();
}

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright {currentYear()}</p>
  </div>,
  document.getElementById("root")
);

//Angela's solution
// const currentDate = new Date();
// const year = currentDate.getFullYear();
