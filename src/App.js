
import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');


const AnimeCards = () => {
  const [animes, setAnimes] = useState([{ title: 'Haikyuu' }, { title: 'AOT' }])
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    const username = 'Akiimai';
    axios.get(`https://api.jikan.moe/v3/user/${username}/animelist/all`)
      .then(function (response) {
        setAnimes(response.data.anime)
        setLoading(false);
      });

  }, [])

  switch (isLoading) {
    case true:
      return <p>Loading</p>;

    default:
      return Object.entries(animes).map(([key, values]) => 
      <AnimeCard 
      title={values.title} 
      imageUrl={values.image_url}
      score={values.score}
       />);
  }
}



const AnimeCard = ({ title, imageUrl, score }) => {
  return (
    <Grid item xs={4} sm={3} md={2} >
      <div className='card'>
        <div className='image'> <img src={imageUrl} /></div>
        <div className='rating'><p>{score}/10</p></div>
        <div className='title'> <p>{title}</p></div>
      </div>
    </Grid>
  );
}

function App() {

  return (
    <Grid container >
      <AnimeCards />
    </Grid>
  );
}

export default App;
