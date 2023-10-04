// Room.js
import React from "react";

interface RoomProps {
  room: {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  onClick: (id: number) => void;
}

function Room({ room, onClick }: RoomProps) {
  return (
    <rect
      x={room.x}
      y={room.y}
      width={room.width}
      height={room.height}
      fill="#B2DFFC"
      onClick={() => onClick(room.id)}
      cursor="pointer"
    />
  );
}

export default Room;
