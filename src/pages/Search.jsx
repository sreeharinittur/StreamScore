import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';
import './img.css';


function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const key='4e44d9029b1270a757cddc766a1bcb63';

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchTerm}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const openTrailerWindow = (trailerKey) => {
    const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
    window.open(trailerUrl, '_blank','fullscreen=yes');
    
  };

  const getTrailerUrl = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const trailerKey = data.results[0].key;
        openTrailerWindow(trailerKey);
      } else {
        console.log('No trailers found for the movie.');
      }
    } catch (error) {
      console.log('Failed to retrieve video information from the API.', error);
    }
  };

  
  return (
    <div style={{backgroundColor:'black'}} >
       <h1 className='text-red-600 text-4xl font-bold cursor-pointer' style={{textAlign:'center'}}>
          SHOW FETCHER
        </h1>
      <form onSubmit={handleSearch} >
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="border bg-white text-black border-black-300 py-2 px-5 flex-grow mr-2"
            
          style={{position:'absolute',top:'50px',borderRadius:'4px'}}
        />
        <button type="submit" className="bg-black-500 text-white py-2 px-4 rounded " style={{position:'absolute',top:'50px',left:'250px',border:'2px solid white'}}>Search</button>
      </form>

      <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' style={{top:'100px'}}>
        <div className='image-grid' >
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => getTrailerUrl(movie.id)} >
          <img
            
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='image-container'
            
            
           
            

          />
          </div>
        ))}
        
        </div>
      </div>
    </div>
  );
}

export default Search;