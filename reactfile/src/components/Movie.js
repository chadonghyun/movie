import React from 'react';
import './Movie.css';
import ProtoTypes from 'prop-types';

function Movie({poster, title, year, genres, summary}) {
  return (
    <>
      <div className='movie'>
        <img src={poster} alt={title} />
        {/* midium images cover */}
        <div className='movie_data'>
          <h3 className='movie_title'>{title}</h3>
          <p className='movie_year'>{year}</p>
          <ul className='movie_genres'>
            {genres.map((genres,index)=>{
              return(
                <li key={index} className='movie_genres_txt'>{genres}</li>
              )
              })
            }
          </ul>
          <p className='movie_summary'>{summary.slice(0,300)}...</p>
        </div>
      </div>
    </>
  );
}
Movie.ProtoTypes = {
  id:ProtoTypes.number.isRequired,
  year:ProtoTypes.number.isRequired,
  title:ProtoTypes.string.isRequired,
  summary:ProtoTypes.string.isRequired,
  poster:ProtoTypes.string.isRequired,
  genres:ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
}

export default Movie;