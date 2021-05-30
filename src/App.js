import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import './App.css';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

const AnimeCards = () => {
  const [animes, setAnimes] = useState([])
  const [isLoading, setLoading] = useState(true);
  let { username } = useParams();

  useEffect(() => {
    username = username ? username : 'Akiimai';
    axios.get(`https://api.jikan.moe/v3/user/${username}/animelist/all`)
      .then(function (response) {
        console.log('response recieved', response)
        setAnimes(response.data.anime)
        setLoading(false);
      });
  }, [])

  switch (isLoading) {
    case true:
      return <p>Loading...</p>;
    default:
      return (
        <Grid container>
          {
            animes.map((anime) =>
              <AnimeCard
                key={anime.mal_id}
                title={anime.title}
                imageUrl={anime.image_url}
              />)
          }
        </Grid>)
  }
}

const AnimeCard = ({ title, imageUrl }) => {
  return (
    <Grid item xs={4} sm={3} md={2} >
      <div className='card'>
        <p className='title'>{title}</p>
        <img className='image' src={imageUrl} alt={imageUrl} />
      </div>
    </Grid>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AnimeCards />
        </Route>
        <Route path="/:username">
          <AnimeCards />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;