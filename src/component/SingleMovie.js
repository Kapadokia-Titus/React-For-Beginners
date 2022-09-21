import React from "react";

function SingleMovie(props){
  console.log(props.movie)
  return(
    <React.Fragment>
        <h1>{props.movie.Title}</h1>
        <p>Source: {props.movie.Source}</p>
    </React.Fragment>
  )
}

export default SingleMovie;