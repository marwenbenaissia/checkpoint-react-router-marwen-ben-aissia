import { Link, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./MovieTrailer.css";

const  MovieTrailer =({film})=> {
    const { id } = useParams();
  let idmovie = Number(id);
  const movie = film.find((elem) => elem.id === idmovie);
return (

<>
    <div className="navBack">
          <Link to="/"><Button className="btnBack" variant="outline-success">
            Go back to Home Page
            </Button>
          </Link>
    </div>
<div className="cont">
<div className="detaillesFilm">
<div className="poster">
<img className="image" src={movie.posterURL} alt={movie.posterURL}/>
</div>

   
<div className="info-right">
    <ul>
    <li><h4 className="titleFilm">{movie.title}</h4><h4>{movie.Datesortie}</h4><br></br></li>
    <li><h4>Genre : </h4>{movie.Genre}<br></br></li>
    <li><h4>Durée : </h4>{movie.duree}<br></br></li>
    <li><h4>Qualité : </h4>{movie.Qualite}<br></br></li>
    <li>
    <div className="description"><h4>Synopsis : </h4><p>{movie.description}</p></div></li>
    </ul>
</div>
</div>
<div className="video-content">
<div className="center-container">
   <p>
       <iframe title="YouTube video player" src={movie.videoURL} width="1000" height="800" frameBorder="0" allowFullScreen="allowfullscreen">
       </iframe>
    </p>

</div>
</div>
</div>
</>
) }
export default MovieTrailer;
