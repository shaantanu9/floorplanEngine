// // Line.js
// import React from "react";

// function Line({ line, onClick }) {
//   return (
//     <line
//       x1={line.x1}
//       y1={line.y1}
//       x2={line.x2}
//       y2={line.y2}
//       stroke="blue"
//       strokeWidth="2"
//       onClick={onClick}
//       style={{ cursor: "pointer" }}
//     />
//   );
// }

// export default Line;


import React from "react";

interface LineProps {
  line: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
  onClick: () => void;
}

function Line({ line, onClick }: LineProps) {
  return (
    <line
      x1={line.x1}
      y1={line.y1}
      x2={line.x2}
      y2={line.y2}
      stroke="blue"
      strokeWidth="2"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Line;