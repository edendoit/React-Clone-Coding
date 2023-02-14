import React, { memo } from "react";

// pureComponent로 감싸주고싶을 때 memo를 쓴다. pureComponent는 주로 가장 하단의 자식일때 쓴다.
// high order component
const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "blue";
  } else {
    background = "green";
  }

  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
});

export default Ball;
