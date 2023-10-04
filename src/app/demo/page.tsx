// // // // import React, { useState } from 'react';

// // // // export default function Home() {
// // // //   const [drawing, setDrawing] = useState(false);
// // // //   const [rectangles, setRectangles] = useState([]);
// // // //   const [selectedRectangle, setSelectedRectangle] = useState(null);

// // // //   const handleMouseDown = (e) => {
// // // //     const newRectangle = {
// // // //       x: e.clientX,
// // // //       y: e.clientY,
// // // //       width: 50,
// // // //       height: 30,
// // // //     };
// // // //     setRectangles([...rectangles, newRectangle]);
// // // //     setSelectedRectangle(newRectangle);
// // // //     setDrawing(true);
// // // //   };

// // // //   const handleMouseMove = (e) => {
// // // //     if (drawing) {
// // // //       const updatedRectangle = { ...selectedRectangle };
// // // //       updatedRectangle.width = e.clientX - selectedRectangle.x;
// // // //       updatedRectangle.height = e.clientY - selectedRectangle.y;
// // // //       setRectangles([...rectangles.filter((r) => r !== selectedRectangle), updatedRectangle]);
// // // //     }
// // // //   };

// // // //   const handleMouseUp = () => {
// // // //     setDrawing(false);
// // // //   };

// // // //   const handleRectangleClick = (rectangle) => {
// // // //     setSelectedRectangle(rectangle);
// // // //   };

// // // //   return (
// // // //     <svg
// // // //       onMouseDown={handleMouseDown}
// // // //       onMouseMove={handleMouseMove}
// // // //       onMouseUp={handleMouseUp}
// // // //       style={{
// // // //         width: '100vw',
// // // //         height: '100vh',
// // // //         backgroundColor: 'lightgray',
// // // //         position: 'relative',
// // // //       }}
// // // //     >
// // // //       {rectangles.map((rectangle, index) => (
// // // //         <rect
// // // //           key={index}
// // // //           x={rectangle.x}
// // // //           y={rectangle.y}
// // // //           width={rectangle.width}
// // // //           height={rectangle.height}
// // // //           fill="blue"
// // // //           onClick={() => handleRectangleClick(rectangle)}
// // // //           style={{ cursor: 'pointer' }}
// // // //         />
// // // //       ))}
// // // //     </svg>
// // // //   );
// // // // }

// // // import React, { useState } from "react";

// // // export default function Home() {
// // //   const [drawing, setDrawing] = useState(false);
// // //   const [floorplan, setFloorplan] = useState({
// // //     x: 50,
// // //     y: 50,
// // //     width: 500,
// // //     height: 300,
// // //     rooms: []
// // //   });
// // //   const [selectedRoom, setSelectedRoom] = useState(null);

// // //   const handleMouseDown = (e) => {
// // //     if (e.target.tagName !== "rect") {
// // //       // If not clicking on a room, start drawing the outer border
// // //       setFloorplan({
// // //         ...floorplan,
// // //         x: e.clientX,
// // //         y: e.clientY,
// // //         width: 0,
// // //         height: 0
// // //       });
// // //       setDrawing(true);
// // //     }
// // //   };

// // //   const handleMouseMove = (e) => {
// // //     if (drawing) {
// // //       const newWidth = e.clientX - floorplan.x;
// // //       const newHeight = e.clientY - floorplan.y;
// // //       setFloorplan({
// // //         ...floorplan,
// // //         width: newWidth,
// // //         height: newHeight
// // //       });
// // //     }
// // //   };

// // //   const handleMouseUp = () => {
// // //     if (drawing) {
// // //       setDrawing(false);
// // //     }
// // //   };

// // //   const handleRoomClick = (room) => {
// // //     setSelectedRoom(room);
// // //   };

// // //   const handleAddRoom = () => {
// // //     if (floorplan.width > 0 && floorplan.height > 0) {
// // //       const newRoom = {
// // //         x: floorplan.x + 10,
// // //         y: floorplan.y + 10,
// // //         width: floorplan.width - 20,
// // //         height: floorplan.height - 20
// // //       };
// // //       setFloorplan({
// // //         ...floorplan,
// // //         rooms: [...floorplan.rooms, newRoom]
// // //       });
// // //     }
// // //   };

// // //   return (
// // //     <svg
// // //       onMouseDown={handleMouseDown}
// // //       onMouseMove={handleMouseMove}
// // //       onMouseUp={handleMouseUp}
// // //       style={{
// // //         width: "100vw",
// // //         height: "100vh",
// // //         backgroundColor: "lightgray",
// // //         position: "relative"
// // //       }}
// // //     >
// // //       {/* Outer Floorplan Border */}
// // //       <rect
// // //         x={floorplan.x}
// // //         y={floorplan.y}
// // //         width={floorplan.width}
// // //         height={floorplan.height}
// // //         fill="none"
// // //         stroke="blue"
// // //         strokeWidth="2"
// // //       />
// // //       {floorplan.rooms.map((room, index) => (
// // //         <rect
// // //           key={index}
// // //           x={room.x}
// // //           y={room.y}
// // //           width={room.width}
// // //           height={room.height}
// // //           fill="blue"
// // //           opacity="0.5"
// // //           onClick={() => handleRoomClick(room)}
// // //           style={{ cursor: "pointer" }}
// // //         />
// // //       ))}
// // //       {selectedRoom && (
// // //         <text
// // //           x={selectedRoom.x + selectedRoom.width / 2}
// // //           y={selectedRoom.y + selectedRoom.height / 2}
// // //         >
// // //           {`Room ${floorplan.rooms.indexOf(selectedRoom) + 1}`}
// // //         </text>
// // //       )}
// // //       <rect
// // //         x="10"
// // //         y="10"
// // //         width="80"
// // //         height="40"
// // //         fill="green"
// // //         onClick={handleAddRoom}
// // //         style={{ cursor: "pointer" }}
// // //       >
// // //         <text x="20" y="30" fill="white">
// // //           Add Room
// // //         </text>
// // //       </rect>
// // //     </svg>
// // //   );
// // // }

// // import React, { useState } from 'react';

// // export default function Home() {
// //   const [drawing, setDrawing] = useState(false);
// //   const [floorplan, setFloorplan] = useState({
// //     x: 50,
// //     y: 50,
// //     width: 500,
// //     height: 300,
// //     rooms: [],
// //     text: [],
// //   });
// //   const [selectedRoom, setSelectedRoom] = useState(null);

// //   const handleMouseDown = (e) => {
// //     if (e.target.tagName !== 'rect') {
// //       // If not clicking on a room, start drawing the outer border
// //       setFloorplan({
// //         ...floorplan,
// //         x: e.clientX,
// //         y: e.clientY,
// //         width: 0,
// //         height: 0,
// //       });
// //       setDrawing(true);
// //     }
// //   };

// //   const handleMouseMove = (e) => {
// //     if (drawing) {
// //       const newWidth = e.clientX - floorplan.x;
// //       const newHeight = e.clientY - floorplan.y;
// //       setFloorplan({
// //         ...floorplan,
// //         width: newWidth,
// //         height: newHeight,
// //       });
// //     }
// //   };

// //   const handleMouseUp = () => {
// //     if (drawing) {
// //       setDrawing(false);
// //       if (floorplan.width > 0 && floorplan.height > 0) {
// //         const newRoom = {
// //           x: floorplan.x + 10,
// //           y: floorplan.y + 10,
// //           width: floorplan.width - 20,
// //           height: floorplan.height - 20,
// //         };
// //         setFloorplan({
// //           ...floorplan,
// //           rooms: [...floorplan.rooms, newRoom],
// //         });
// //       }
// //     }
// //   };

// //   const handleRoomClick = (room) => {
// //     setSelectedRoom(room);
// //   };

// //   const handleAddText = () => {
// //     if (selectedRoom) {
// //       const newText = {
// //         x: selectedRoom.x,
// //         y: selectedRoom.y - 20,
// //         text: 'New Text',
// //       };
// //       setFloorplan({
// //         ...floorplan,
// //         text: [...floorplan.text, newText],
// //       });
// //     }
// //   };

// //   const handleUndo = () => {
// //     if (floorplan.rooms.length > 0) {
// //       const lastRoomIndex = floorplan.rooms.length - 1;
// //       const updatedRooms = floorplan.rooms.slice(0, lastRoomIndex);
// //       setFloorplan({
// //         ...floorplan,
// //         rooms: updatedRooms,
// //       });
// //     }
// //   };

// //   return (
// //     <svg
// //       onMouseDown={handleMouseDown}
// //       onMouseMove={handleMouseMove}
// //       onMouseUp={handleMouseUp}
// //       style={{
// //         width: '100vw',
// //         height: '100vh',
// //         backgroundColor: 'lightgray',
// //         position: 'relative',
// //       }}
// //     >
// //       {/* Outer Floorplan Border */}
// //       <rect
// //         x={floorplan.x}
// //         y={floorplan.y}
// //         width={floorplan.width}
// //         height={floorplan.height}
// //         fill="none"
// //         stroke="blue"
// //         strokeWidth="2"
// //       />
// //       {floorplan.rooms.map((room, index) => (
// //         <rect
// //           key={index}
// //           x={room.x}
// //           y={room.y}
// //           width={room.width}
// //           height={room.height}
// //           fill="blue"
// //           opacity="0.5"
// //           onClick={() => handleRoomClick(room)}
// //           style={{ cursor: 'pointer' }}
// //         />
// //       ))}
// //       {floorplan.text.map((text, index) => (
// //         <text
// //           key={index}
// //           x={text.x}
// //           y={text.y}
// //           fill="black"
// //           onClick={() => setSelectedRoom(null)}
// //           style={{ cursor: 'pointer' }}
// //         >
// //           {text.text}
// //         </text>
// //       ))}
// //       <rect
// //         x="10"
// //         y="10"
// //         width="80"
// //         height="40"
// //         fill="green"
// //         onClick={handleAddText}
// //         style={{ cursor: 'pointer' }}
// //       >
// //         <text x="20" y="30" fill="white">Add Text</text>
// //       </rect>
// //       <rect
// //         x="100"
// //         y="10"
// //         width="80"
// //         height="40"
// //         fill="red"
// //         onClick={handleUndo}
// //         style={{ cursor: 'pointer' }}
// //       >
// //         <text x="110" y="30" fill="white">Undo</text>
// //       </rect>
// //     </svg>
// //   );
// // }

// import React, { useState } from 'react';

// export default function Home() {
//   const [drawing, setDrawing] = useState(false);
//   const [floorplan, setFloorplan] = useState({
//     x: 50,
//     y: 50,
//     width: 500,
//     height: 300,
//     shapes: [],
//   });
//   const [selectedShape, setSelectedShape] = useState(null);
//   const [selectedText, setSelectedText] = useState(null);
//   const [scale, setScale] = useState(1);

//   const handleMouseDown = (e) => {
//     if (e.target.tagName !== 'rect' && e.target.tagName !== 'circle') {
//       // If not clicking on a shape, start drawing the outer border
//       setFloorplan({
//         ...floorplan,
//         x: e.clientX,
//         y: e.clientY,
//         width: 0,
//         height: 0,
//       });
//       setDrawing(true);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (drawing) {
//       const newWidth = e.clientX - floorplan.x;
//       const newHeight = e.clientY - floorplan.y;
//       setFloorplan({
//         ...floorplan,
//         width: newWidth,
//         height: newHeight,
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     if (drawing) {
//       setDrawing(false);
//       if (floorplan.width > 0 && floorplan.height > 0) {
//         const newShape = {
//           type: selectedShape,
//           x: floorplan.x,
//           y: floorplan.y,
//           width: floorplan.width,
//           height: floorplan.height,
//           text: 'Room Name',
//           detail: 'Room Detail',
//         };
//         setFloorplan({
//           ...floorplan,
//           shapes: [...floorplan.shapes, newShape],
//         });
//       }
//     }
//   };

//   const handleShapeClick = (shape) => {
//     setSelectedShape(shape);
//     setSelectedText(shape);
//   };

//   const handleTextChange = (e, shape) => {
//     const updatedShapes = floorplan.shapes.map((s) => {
//       if (s === shape) {
//         return { ...s, text: e.target.value };
//       }
//       return s;
//     });
//     setFloorplan({
//       ...floorplan,
//       shapes: updatedShapes,
//     });
//   };

//   const handleDetailChange = (e, shape) => {
//     const updatedShapes = floorplan.shapes.map((s) => {
//       if (s === shape) {
//         return { ...s, detail: e.target.value };
//       }
//       return s;
//     });
//     setFloorplan({
//       ...floorplan,
//       shapes: updatedShapes,
//     });
//   };

//   const handleScaleChange = (e) => {
//     setScale(e.target.value);
//   };

//   const handleAddText = () => {
//     if (selectedShape) {
//       const newText = {
//         type: 'text',
//         x: selectedShape.x + selectedShape.width / 2 - 40,
//         y: selectedShape.y - 20,
//         text: 'New Text',
//         detail: 'New Detail',
//       };
//       setFloorplan({
//         ...floorplan,
//         shapes: [...floorplan.shapes, newText],
//       });
//     }
//   };

//   const handleUndo = () => {
//     if (floorplan.shapes.length > 0) {
//       const lastShapeIndex = floorplan.shapes.length - 1;
//       const updatedShapes = floorplan.shapes.slice(0, lastShapeIndex);
//       setFloorplan({
//         ...floorplan,
//         shapes: updatedShapes,
//       });
//     }
//   };

//   const handleSave = () => {
//     // You can save the floorplan data as needed
//     alert('Floorplan data saved!');
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => setSelectedShape('square')}>Square</button>
//         <button onClick={() => setSelectedShape('circle')}>Circle</button>
//         <button onClick={() => setSelectedShape('rectangle')}>Rectangle</button>
//         <input
//           type="range"
//           min="1"
//           max="2"
//           step="0.1"
//           value={scale}
//           onChange={handleScaleChange}
//         />
//       </div>
//       <svg
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         style={{
//           width: '100vw',
//           height: 'calc(100vh - 40px)', // Adjust for buttons
//           backgroundColor: 'lightgray',
//           position: 'relative',
//           transform: `scale(${scale})`, // Apply scaling
//           transformOrigin: '0 0', // Set scaling origin
//         }}
//       >
//         {floorplan.shapes.map((shape, index) => (
//           <g key={index}>
//             {shape.type === 'square' && (
//               <rect
//                 x={shape.x}
//                 y={shape.y}
//                 width={shape.width}
//                 height={shape.height}
//                 fill="none"
//                 stroke="blue"
//                 strokeWidth="2"
//                 onClick={() => handleShapeClick(shape)}
//                 style={{ cursor: 'pointer' }}
//               />
//             )}
//             {shape.type === 'circle' && (
//               <circle
//                 cx={shape.x + shape.width / 2}
//                 cy={shape.y + shape.height / 2}
//                 r={Math.min(shape.width, shape.height) / 2}
//                 fill="none"
//                 stroke="blue"
//                 strokeWidth="2"
//                 onClick={() => handleShapeClick(shape)}
//                 style={{ cursor: 'pointer' }}
//               />
//             )}
//             {shape.type === 'rectangle' && (
//               <rect
//                 x={shape.x}
//                 y={shape.y}
//                 width={shape.width}
//                 height={shape.height}
//                 fill="none"
//                 stroke="blue"
//                 strokeWidth="2"
//                 onClick={() => handleShapeClick(shape)}
//                 style={{ cursor: 'pointer' }}
//               />
//             )}
//             {shape.type === 'text' && (
//               <text
//                 x={shape.x}
//                 y={shape.y}
//                 fill="black"
//                 onClick={() => handleShapeClick(shape)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {shape.text}
//               </text>
//             )}
//           </g>
//         ))}
//       </svg>
//       {selectedText && (
//         <div>
//           <input
//             type="text"
//             placeholder="Room Name"
//             value={selectedText.text}
//             onChange={(e) => handleTextChange(e, selectedText)}
//           />
//           <input
//             type="text"
//             placeholder="Room Detail"
//             value={selectedText.detail}
//             onChange={(e) => handleDetailChange(e, selectedText)}
//           />
//         </div>
//       )}
//       <button onClick={handleAddText}>Add Text</button>
//       <button onClick={handleUndo}>Undo</button>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import ShapeList from "./ShapeList"; // Import the ShapeList component
// import Shape from "./Shape"; // Import the Shape component
// import Text from "./Text"; // Import the Text component
// import Line from "./Line";
// export default function Home() {
//   const [drawing, setDrawing] = useState(false);
//   const [floorplan, setFloorplan] = useState({
//     x: 50,
//     y: 50,
//     width: 500,
//     height: 300,
//     shapes: []
//   });
//   const [selectedShape, setSelectedShape] = useState(null);
//   const [selectedText, setSelectedText] = useState(null);
//   const [scale, setScale] = useState(1);

//   const [dragging, setDragging] = useState(false);
//   const [draggedShape, setDraggedShape] = useState(null);
//   const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

//   const findClickedShape = (x, y) => {
//     return floorplan.shapes.find((shape) => {
//       if (
//         x >= shape.x &&
//         x <= shape.x + shape.width &&
//         y >= shape.y &&
//         y <= shape.y + shape.height
//       ) {
//         return true;
//       }
//       return false;
//     });
//   };

//   const handleMouseDown = (e) => {
//     if (e.ctrlKey) {
//       const clickedShape = findClickedShape(e.clientX, e.clientY);
//       if (clickedShape) {
//         setDragging(true);
//         setDraggedShape(clickedShape);
//         setInitialPosition({
//           x: e.clientX - clickedShape.x,
//           y: e.clientY - clickedShape.y
//         });
//       }
//     } else {
//       // Handle shape creation as before

//       if (e.target.tagName !== "rect" && e.target.tagName !== "circle") {
//         setFloorplan({
//           ...floorplan,
//           x: e.clientX,
//           y: e.clientY,
//           width: 0,
//           height: 0
//         });
//         setDrawing(true);
//       }
//     }
//   };

//   const handleMouseMove = (e:any) => {
//     if (dragging) {
//       const newX = e.clientX - initialPosition.x;
//       const newY = e.clientY - initialPosition.y;
//       setFloorplan((prevFloorplan:any) => ({
//         ...prevFloorplan,
//         shapes: prevFloorplan.shapes.map((shape:any) =>
//           shape === draggedShape ? { ...shape, x: newX, y: newY } : shape
//         )
//       }));
//     } else {
//       if (drawing) {
//         const newWidth = e.clientX - floorplan.x;
//         const newHeight = e.clientY - floorplan.y;
//         setFloorplan({
//           ...floorplan,
//           width: newWidth,
//           height: newHeight
//         });
//       }
//     }
//   };

//   const handleMouseUp = () => {
//     if (drawing) {
//       setDrawing(false);
//       if (floorplan.width > 0 && floorplan.height > 0) {
//         const newShape = {
//           type: selectedShape,
//           x: floorplan.x,
//           y: floorplan.y,
//           width: floorplan.width,
//           height: floorplan.height,
//           text: "Room Name",
//           detail: "Room Detail"
//         };
//         setFloorplan({
//           ...floorplan,
//           shapes: [...floorplan.shapes, newShape]
//         });
//       }
//     }
//   };

//   const handleShapeClick = (shape:any) => {
//     setSelectedShape(shape);
//     setSelectedText(shape);
//   };

//   const handleTextChange = (e:any, shape:any) => {
//     const updatedShapes = floorplan.shapes.map((s:any) => {
//       if (s === shape) {
//         return { ...s, text: e.target.value };
//       }
//       return s;
//     });
//     setFloorplan({
//       ...floorplan,
//       shapes: updatedShapes
//     });
//   };

//   const handleDetailChange = (e:any, shape:any) => {
//     const updatedShapes = floorplan.shapes.map((s:any) => {
//       if (s === shape) {
//         return { ...s, detail: e.target.value };
//       }
//       return s;
//     });
//     setFloorplan({
//       ...floorplan,
//       shapes: updatedShapes
//     });
//   };

//   const handleScaleChange = (e:any) => {
//     setScale(e.target.value);
//   };

//   const handleAddText = () => {
//     if (selectedShape) {
//       const newText = {
//         type: "text",
//         x: selectedShape.x + selectedShape.width / 2 - 40,
//         y: selectedShape.y - 20,
//         text: "New Text",
//         detail: "New Detail"
//       };
//       setFloorplan({
//         ...floorplan,
//         shapes: [...floorplan.shapes, newText]
//       });
//     }
//   };

//   const handleUndo = () => {
//     if (floorplan.shapes.length > 0) {
//       const lastShapeIndex = floorplan.shapes.length - 1;
//       const updatedShapes = floorplan.shapes.slice(0, lastShapeIndex);
//       setFloorplan({
//         ...floorplan,
//         shapes: updatedShapes
//       });
//     }
//   };

//   const handleSave = () => {
//     // You can save the floorplan data as needed
//     alert("Floorplan data saved!");
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => setSelectedShape("square")}>Square</button>
//         <button onClick={() => setSelectedShape("circle")}>Circle</button>
//         <button onClick={() => setSelectedShape("rectangle")}>Rectangle</button>
//         <button onClick={() => setSelectedShape("line")}>Line</button>

//         <input
//           type="range"
//           min="1"
//           max="2"
//           step="0.1"
//           value={scale}
//           onChange={handleScaleChange}
//         />
//       </div>
//       <svg
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         style={{
//           width: "100vw",
//           height: "calc(100vh - 40px)", // Adjust for buttons
//           backgroundColor: "lightgray",
//           position: "relative",
//           transform: `scale(${scale})`, // Apply scaling
//           transformOrigin: "0 0" // Set scaling origin
//         }}
//       >
//         <ShapeList shapes={floorplan.shapes} onShapeClick={handleShapeClick} />
//       </svg>
//       {selectedText && (
//         <div>
//           <input
//             type="text"
//             placeholder="Room Name"
//             value={selectedText.text}
//             onChange={(e) => handleTextChange(e, selectedText)}
//           />
//           <input
//             type="text"
//             placeholder="Room Detail"
//             value={selectedText.detail}
//             onChange={(e) => handleDetailChange(e, selectedText)}
//           />
//         </div>
//       )}
//       <button onClick={handleAddText}>Add Text</button>
//       <button onClick={handleUndo}>Undo</button>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import ShapeList from "./ShapeList";
import Shape from "./Shape";
import Text from "./Text";
import Line from "./Line";

interface FloorplanShape {
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  detail: string;
}

interface Floorplan {
  x: number;
  y: number;
  width: number;
  height: number;
  shapes: FloorplanShape[];
}
interface Room {
  name: string;
  detail: string;
  x: number;
  y: number;
}

export default function Home() {
  const [drawing, setDrawing] = useState<boolean>(false);
  const [floorplan, setFloorplan] = useState<Floorplan>({
    x: 50,
    y: 50,
    width: 500,
    height: 300,
    shapes: [],
  });
  const [selectedShape, setSelectedShape] = useState<any | null>(null);
  const [selectedText, setSelectedText] = useState<FloorplanShape | null>(null);
  const [scale, setScale] = useState<number>(1);

  const [dragging, setDragging] = useState<boolean>(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [draggedShape, setDraggedShape] = useState<FloorplanShape | null>(null);
  const [initialPosition, setInitialPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [tempShape, setTempShape] = useState(null);
  const findClickedShape = (
    x: number,
    y: number
  ): FloorplanShape | undefined => {
    return floorplan.shapes.find((shape) => {
      if (
        x >= shape.x &&
        x <= shape.x + shape.width &&
        y >= shape.y &&
        y <= shape.y + shape.height
      ) {
        return true;
      }
      return false;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (e.ctrlKey) {
      const clickedShape = findClickedShape(e.clientX, e.clientY);
      if (clickedShape) {
        setDragging(true);
        setDraggedShape(clickedShape);
        setInitialPosition({
          x: e.clientX - clickedShape.x,
          y: e.clientY - clickedShape.y,
        });
      }
    } else {
      if (e.target instanceof SVGSVGElement) {
        setFloorplan({
          ...floorplan,
          x: e.clientX,
          y: e.clientY,
          width: 0,
          height: 0,
        });
        setDrawing(true);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (dragging) {
      const newX = e.clientX - initialPosition.x;
      const newY = e.clientY - initialPosition.y;
      setFloorplan((prevFloorplan) => ({
        ...prevFloorplan,
        shapes: prevFloorplan.shapes.map((shape) =>
          shape === draggedShape ? { ...shape, x: newX, y: newY } : shape
        ),
      }));
    } else {
      if (drawing) {
        const newWidth = e.clientX - floorplan.x;
        const newHeight = e.clientY - floorplan.y;
        setFloorplan({
          ...floorplan,
          width: newWidth,
          height: newHeight,
        });
      }
    }
  };

  const handleMouseUp = () => {
    if (drawing) {
      setDrawing(false);
      setTempShape(null);
      if (floorplan.width > 0 && floorplan.height > 0) {
        const newShape: FloorplanShape = {
          type: selectedShape!,
          x: floorplan.x,
          y: floorplan.y,
          width: floorplan.width,
          height: floorplan.height,
          text: "Room Name",
          detail: "Room Detail",
        };
        setFloorplan({
          ...floorplan,
          shapes: [...floorplan.shapes, newShape],
        });
      }
    }
  };

  // const handleShapeClick = (shape: FloorplanShape) => {
  //   setSelectedShape(shape.type);
  //   setSelectedText(shape);
  // };
  const handleShapeClick = (shape: FloorplanShape) => {
    const newShape: FloorplanShape = {
      type: shape.type,
      x: shape.x,
      y: shape.y,
      width: shape.width,
      height: shape.height,
      text: shape.text || "",
      detail: shape.detail || "",
      x1: shape.x1,
      y1: shape.y1,
      x2: shape.x2,
      y2: shape.y2,
    };
    setSelectedShape(newShape);
    setSelectedText(null);
  };

  // const handleTextChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   shape: FloorplanShape
  // ) => {
  //   const updatedShapes = floorplan.shapes.map((s) => {
  //     if (s === shape) {
  //       return { ...s, text: e.target.value };
  //     }
  //     return s;
  //   });
  //   setFloorplan({
  //     ...floorplan,
  //     shapes: updatedShapes,
  //   });
  // };

  // const handleDetailChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   shape: FloorplanShape
  // ) => {
  //   const updatedShapes = floorplan.shapes.map((s) => {
  //     if (s === shape) {
  //       return { ...s, detail: e.target.value };
  //     }
  //     return s;
  //   });
  //   setFloorplan({
  //     ...floorplan,
  //     shapes: updatedShapes,
  //   });
  // };

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScale(parseFloat(e.target.value));
  };

  const handleAddText = () => {
    if (selectedShape) {
      const newText: FloorplanShape = {
        type: "text",
        x: selectedShape.x + selectedShape.width / 2 - 40,
        y: selectedShape.y - 20,
        width: 100,
        height: 50,
        text: "New Text",
        detail: "New Detail",
      };
      setFloorplan({
        ...floorplan,
        shapes: [...floorplan.shapes, newText],
      });
    }
  };

  const handleUndo = () => {
    if (floorplan.shapes.length > 0) {
      const lastShapeIndex = floorplan.shapes.length - 1;
      const updatedShapes = floorplan.shapes.slice(0, lastShapeIndex);
      setFloorplan({
        ...floorplan,
        shapes: updatedShapes,
      });
    }
  };

  const handleSave = () => {
    // You can save the floorplan data as needed
    alert("Floorplan data saved!");
  };

  const handleAddRoom = () => {
    if (selectedShape) {
      const newRoom: Room = {
        name: "New Room",
        detail: "Room Detail",
        x: selectedShape.x + selectedShape.width / 2 - 40,
        y: selectedShape.y - 20,
      };
      setRooms([...rooms, newRoom]);
    }
  };
  const handleRoomClick = (room: Room) => {
    const newShape: FloorplanShape = {
      type: "room",
      x: room.x,
      y: room.y,
      width: 100,
      height: 50,
      text: room.name,
      detail: room.detail,
    };
    setSelectedShape(null);
    setSelectedText(newShape);
  };

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    room: Room
  ) => {
    const updatedRooms = rooms.map((r) => {
      if (r === room) {
        return { ...r, name: e.target.value };
      }
      return r;
    });
    setRooms(updatedRooms);
  };

  const handleDetailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    room: Room
  ) => {
    const updatedRooms = rooms.map((r) => {
      if (r === room) {
        return { ...r, detail: e.target.value };
      }
      return r;
    });
    setRooms(updatedRooms);
  };

  return (
    <div>
      <div>
        <button onClick={() => setSelectedShape("square")}>Square</button>
        <button onClick={() => setSelectedShape("circle")}>Circle</button>
        <button onClick={() => setSelectedShape("rectangle")}>Rectangle</button>
        <button onClick={() => setSelectedShape("ellipse")}>ellipse</button>
        <button onClick={() => setSelectedShape("triangle")}>triangle</button>
        <button onClick={() => setSelectedShape("star")}>star</button>
        <button onClick={handleAddRoom}>Add Room</button>
        {/* star */}

        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={scale}
          onChange={handleScaleChange}
        />
      </div>
      <svg
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          width: "60vw",
          height: "calc(60vh - 40px)", // Adjust for buttons
          backgroundColor: "lightgray",
          position: "relative",
          transform: `scale(${scale})`, // Apply scaling
          transformOrigin: "0 0", // Set scaling origin
        }}
      >
        <ShapeList shapes={floorplan.shapes} onShapeClick={handleShapeClick} />
        {rooms.map((room, index) => (
          <text
            key={index}
            x={room.x}
            y={room.y}
            fill="black"
            onClick={() => handleRoomClick(room)}
            style={{ cursor: "pointer" }}
          >
            {room.name}
          </text>
        ))}
      </svg>
      {selectedText && (
        <div>
          <input
            type="text"
            placeholder="Room Name"
            value={selectedText.text}
            onChange={(e) => handleTextChange(e, selectedText)}
          />
          <input
            type="text"
            placeholder="Room Detail"
            value={selectedText.detail}
            onChange={(e) => handleDetailChange(e, selectedText)}
          />
        </div>
      )}
      <button onClick={handleAddText}>Add Text</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
