import React from 'react';
import './App.css';

function App() {
  const initialState = [];

  const getLocation = (num) => {
    switch (true) {
      case num >= 0 && num < 30:
        return 0;
        break;
      case num >= 30 && num < 60:
        return 30;
        break;
      case num >= 60 && num < 90:
        return 60;
        break;
      case num >= 90 && num < 120:
        return 90;
        break;
      case num >= 120 && num < 150:
        return 120;
        break;
      case num >= 150 && num < 180:
        return 150;
        break;
      case num >= 180 && num < 210:
        return 180;
        break;
      case num >= 210 && num <= 240:
        return 210;
        break;
      default:
        return 0;
    }
  };

  //const canvasRef = React.useRef(null);
  const ctxRef = React.useRef(null);

  React.useEffect(() => {
    for (var i = 0; i < 240; i += 30) {
      for (var j = 0; j < 240; j += 30) {
        initialState.push({
          positionX: i,
          positionY: j,
          completed: false,
        });
      }
    }

    const canvas = canvasRef.current;
    canvas.width = 240;
    canvas.height = 240;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 20;

    locations.map((item) => {
      ctxRef.current.fillStyle = item.completed ? 'red' : 'blue';
      ctxRef.current.fillRect(item.positionX, item.positionY, 29, 29);
    });
  }, [initialState]);

  const [locations, setLocations] = React.useState(initialState);
  const canvasRef = React.useRef(null);

  const clickFunction = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    const locationX = getLocation(offsetX);
    const locationY = getLocation(offsetY);
    setLocations(
      locations.map((item) => {
        if (item.positionX === locationX && item.positionY === locationY) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <canvas
      style={{ background: 'green' }}
      ref={canvasRef}
      onClick={clickFunction}></canvas>
  );
}

export default App;
