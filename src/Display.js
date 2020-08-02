import React from 'react';
import Grid from '@material-ui/core/Grid';

function Display(props) {
  const { dbImages } = props;
  return (
    <>
      <Grid container direction='row' justify='flex-start' spacing={0}>
        {dbImages.map((item, index) => (
          <Grid item xs={6} sm={4} lg={3} key={index}>
            <h5>{item.name}</h5>
            <img src={item.image} alt='emoji' width={150} height={150}></img>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Display;
