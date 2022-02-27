import '../App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { saveMovies } from '../store';


function Home({ movieList, saveMoviesToStore }) {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    if(movieList.length == 0) {
      const targetUrl = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year';
      axios.get(targetUrl)
        .then(res => {
          const fetchedMovies = res.data.data.movies;
          setMovies(fetchedMovies);
          setIsLoading(false);
          saveMoviesToStore(fetchedMovies);
        });
    } else {
      setMovies(movieList);
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="App">
      <div className='container'>
        {
          isLoading ?
          <div className='loading-ani'>
            <img src={ require('./855.gif') }></img>
            <br></br>
            I am Loading...
          </div>
          : 
          movies.map((movie, i) => {
            return (
              <div key={i}>
                <Movie 
                bg={movie.background_image_original} 
                movieImg={movie.medium_cover_image} 
                title={movie.title} 
                year={movie.year}
                summary={movie.summary} 
                genres={movie.genres} 
                id={movie.id} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { movieList: state };
};

function mapDispatchToProps(dispatch) {
  return { saveMoviesToStore: (movies) => { dispatch(saveMovies(movies)); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);