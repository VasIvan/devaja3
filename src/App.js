import React from 'react';
import './App.css';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import firebaseDb from './firebase';

import Display from './Display';
import NameForm from './NameForm';

import { getLocation } from './utils';

function App() {
  const initialState = [];

  const ctxRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  const [form, setForm] = React.useState(false);
  const [dbImages, setDbImages] = React.useState([]);
  const [locations, setLocations] = React.useState(initialState);

  React.useEffect(() => {
    firebaseDb.child('emojiImg').on('value', (snapshot) => {
      setDbImages(Object.values(snapshot.val()).reverse());
    });
  }, []);

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

    locations.map((item) => {
      ctxRef.current.fillStyle = item.completed ? '#2bc0d6' : '#ca258e';
      ctxRef.current.fillRect(item.positionX, item.positionY, 29, 29);
    });
  }, [initialState]);

  const handleFormView = () => {
    setForm(false);
    setLocations(initialState);
  };

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
    <>
      <Typography variant='h4'>Create Emoji</Typography>
      <canvas
        style={{ background: 'black' }}
        ref={canvasRef}
        onClick={clickFunction}
      />
      <br />
      <Button
        variant='contained'
        color='default'
        size='large'
        style={{ margin: '20px 0', width: '240px' }}
        onClick={() => setForm(true)}
        startIcon={<SaveIcon />}>
        Save
      </Button>
      <br />
      {form && (
        <NameForm handleFormView={handleFormView} canvas={canvasRef.current} />
      )}
      <Display dbImages={dbImages} />
    </>
  );
}

export default App;
