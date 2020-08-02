import React from 'react';
import firebaseDb from './firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function NameForm(props) {
  const { handleFormView, canvas } = props;

  const [imgName, setImgName] = React.useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    const dataURI = canvas.toDataURL();

    firebaseDb
      .child('emojiImg')
      .push({ image: dataURI, name: imgName }, (err) => {
        if (err) {
          console.log(err);
        }
      });
    handleFormView();
  };

  return (
    <>
      <form onSubmit={formSubmit} style={{ maxWidth: '240px' }}>
        <TextField
          error
          required
          label='Emoji Name'
          variant='outlined'
          InputProps={{
            style: {
              color: 'white',
            },
          }}
          fullWidth
          onChange={(e) => setImgName(e.target.value)}
        />
        <Button
          variant='contained'
          color='default'
          size='large'
          type='submit'
          fullWidth
          style={{ margin: '20px 0' }}
          startIcon={<CloudUploadIcon />}>
          Upload
        </Button>
      </form>
    </>
  );
}

export default NameForm;
