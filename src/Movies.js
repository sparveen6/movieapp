import React from 'react';
import { NavLink } from 'react-router-dom';
import {useGlobalContext} from './context';

const Movies=()=>{

    const {movie} = useGlobalContext();
    return (
    

      <section className= "movie-page">
         <div className="container grid grid-4-col">{movie.map((currMovie)=>{
            const { imdbID, Title, Poster } = currMovie;
            const movieName= Title.substring(0,15);
            
            return (
               
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                         <h2>{movieName.length > 14 ? `${movieName}... `: movieName}</h2>
                          <img src={Poster} alt="its img is not available"  />

                      </div>

                    </div>
                </NavLink>
                
            )
          })}</div>
        </section>
    );
    
};

export default Movies;