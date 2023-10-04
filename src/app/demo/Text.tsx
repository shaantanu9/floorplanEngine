// import React from "react";

// function Text({ text, onClick }) {
//   return (
//     <text
//       x={text.x}
//       y={text.y}
//       fill="black"
//       onClick={onClick}
//       style={{ cursor: "pointer" }}
//     >
//       {text.text}
//     </text>
//   );
// }

// export default Text;


import React from "react";

interface TextProps {
  text: {
    x: number;
    y: number;
    text: string;
  };
  onClick: () => void;
}

function Text({ text, onClick }: TextProps) {
  return (
    <text
      x={text.x}
      y={text.y}
      fill="black"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {text.text}
    </text>
  );
}

export default Text;