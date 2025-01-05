import { useState } from "react"

const Movies = () => {
    const [movies, setMovies] = useState(
        {
        title: 'Ocean 13', 
        rating: 9.0,
        }
        )
    const ratingHandler = () => {setMovies({...movies, rating: 5 })}

  return (
    <div> 
       <h1>useState React Hook Example 3</h1>
       <h2>Movie Name: {movies.title}</h2>
       <h3>Rating: {movies.rating}</h3>


       <button onClick={ratingHandler}>Change Rating</button>



     
      
    </div>
  )
}

export default Movies