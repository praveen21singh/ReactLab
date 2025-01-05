import React, { useState } from 'react'

const ObjectArrays = () => {

    const [movies,setMovies] = useState([

        {id: 0, title: "Spider Man", rating: 3},
        {id: 1, title: "Super Man", rating: 7},
        {id: 2, title: "Wonder Woman", rating: 8},

    ]);

    const changeMovieHandler = () => {setMovies(movies.map(m => m.id == 1 ? {...movies, title: 'Iron Man',rating: m.rating} : m))}
    const addMovieHandler = () => {setMovies([...movies, {id: 3, title: 'Shaktimaan',rating: 10}])}
    const changeRatingHandler = () => {setMovies(movies.map(m => m.id == 3 ? {...movies, id: m.id, title: m.title, rating: 20} : m))}


  return (
    <div>
       <h1>useState React Hook Example 4</h1>
       
       {movies.map(m => (
        <li key={Math.random()}>{m.title}, Rating - {m.rating}</li>
        ))}

        <button onClick={addMovieHandler}>Add Movie Name</button>
        <button onClick={changeMovieHandler}>Change Movie Name</button>
        <button onClick={changeRatingHandler}>Change Rating</button>

       


    </div>
  )
}

export default ObjectArrays