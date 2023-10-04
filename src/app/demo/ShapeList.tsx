import React from "react";
import Shape from "./Shape";
import Text from "./Text";
import Line from "./Line";

interface ShapeListProps {
  shapes: {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    text?: string;
    detail?: string;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
  }[];
  onShapeClick: (shape: {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    text?: string;
    detail?: string;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
  }) => void;
}

function ShapeList({ shapes, onShapeClick }: ShapeListProps) {

    


  return (
    <g>
      {shapes.map((shape, index) => (
        <g key={index}>
          {shape.type === "square" ||
          shape.type === "circle" ||
          shape.type === "rectangle" ||
          shape.type === "triangle" ||
          shape.type === "ellipse" ? (
            <Shape shape={shape} onClick={() => onShapeClick(shape)} />
          ) : null}
        </g>
      ))}
    </g>
  );
}

export default ShapeList;
