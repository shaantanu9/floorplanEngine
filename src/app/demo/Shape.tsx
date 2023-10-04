// import React from "react";

// function Shape({ shape, onClick }) {
//   if (shape.type === "square") {
//     return (
//       <rect
//         x={shape.x}
//         y={shape.y}
//         width={shape.width}
//         height={shape.height}
//         fill="none"
//         stroke="blue"
//         strokeWidth="2"
//         onClick={onClick}
//         style={{ cursor: "pointer" }}
//       />
//     );
//   } else if (shape.type === "circle") {
//     return (
//       <circle
//         cx={shape.x + shape.width / 2}
//         cy={shape.y + shape.height / 2}
//         r={Math.min(shape.width, shape.height) / 2}
//         fill="none"
//         stroke="blue"
//         strokeWidth="2"
//         onClick={onClick}
//         style={{ cursor: "pointer" }}
//       />
//     );
//   } else if (shape.type === "rectangle") {
//     return (
//       <rect
//         x={shape.x}
//         y={shape.y}
//         width={shape.width}
//         height={shape.height}
//         fill="none"
//         stroke="blue"
//         strokeWidth="2"
//         onClick={onClick}
//         style={{ cursor: "pointer" }}
//       />
//     );
//   }
//   return null;
// }

// export default Shape;

import React from "react";

interface ShapeProps {
  shape: {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  onClick: () => void;
}

function Shape({ shape, onClick }: ShapeProps) {
  if (shape.type === "square") {
    return (
      <rect
        x={shape.x}
        y={shape.y}
        width={shape.width}
        height={shape.height}
        fill="none"
        stroke="blue"
        strokeWidth="2"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    );
  } else if (shape.type === "circle") {
    return (
      <circle
        cx={shape.x + shape.width / 2}
        cy={shape.y + shape.height / 2}
        r={Math.min(shape.width, shape.height) / 2}
        fill="none"
        stroke="blue"
        strokeWidth="2"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    );
  } else if (shape.type === "rectangle") {
    return (
      <rect
        x={shape.x}
        y={shape.y}
        width={shape.width}
        height={shape.height}
        fill="none"
        stroke="blue"
        strokeWidth="2"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    );
  } else if (shape.type === "triangle") {
    const halfWidth = shape.width / 2;
    const halfHeight = shape.height / 2;
    const points = [
      [shape.x + halfWidth, shape.y],
      [shape.x + shape.width, shape.y + shape.height],
      [shape.x, shape.y + shape.height],
    ];
    return (
      <polygon
        points={points.map((point) => point.join(",")).join(" ")}
        fill="none"
        stroke="blue"
        strokeWidth="2"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    );
  } else if (shape.type === "ellipse") {
    return (
      <ellipse
        cx={shape.x + shape.width / 2}
        cy={shape.y + shape.height / 2}
        rx={shape.width / 2}
        ry={shape.height / 2}
        fill="none"
        stroke="blue"
        strokeWidth="2"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    );
  } else if (shape.type == "star") {
    return (
      <polygon
        points="100,10 40,198 190,78 10,78 160,198"
        fill="none"
        stroke="blue"
        strokeWidth="2"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    );
  }

  //   else if (shape.type === "line") {
  //     return (
  //       <line
  //         x1={shape.x1}
  //         y1={shape.y1}
  //         x2={shape.x2}
  //         y2={shape.y2}
  //         stroke="blue"
  //         strokeWidth="2"
  //         onClick={onClick}
  //         style={{ cursor: "pointer" }}
  //       />
  //     );
  //   }
  return null;
}

export default Shape;
