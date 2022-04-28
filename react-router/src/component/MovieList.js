import {useState} from 'react';
import MovieCard from './MovieCard'
import './MovieCard.css'
import { Button ,Modal,Form,Navbar,Container,FormControl} from 'react-bootstrap';
import './MovieList.css';
import {Link} from "react-router-dom";


function Movie ({movie,key}){
  return(   
  <div className="movie-item2">
    <div className="mi2-in th-vf">
        <div className="mi2-img">
          <img className="img" src={movie.posterURL} alt="Avengers: Endgame"/> 
          <div className="mi2-title">{movie.title}</div>
            <span className="mi2-version">{movie.Genre}</span>
            <span className="mi2-rating">
              <i id="Maticon_star" className="material-icons-star">★</i>
              {movie.rating} 
             </span>
             {console.log (key)}
        </div>
    </div>
  </div>
  )
}
const  MovieList =({film})=> {
  console.log(film);
  const [movies,setMovies]=useState(film)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filterTitle, setSersch] = useState("");
  const [filterRating, setrateSersch] = useState("");
  function Addmovies (title,description,posterURL,videoURL,Origine,  Datesortie,Genre,duree,Qualite,rating) 
  {
    const newMovies=[...movies,{
      id:Math.floor(Math.random() * 100000),
      title:title, 
      description:description, 
      posterURL:posterURL,
      rating:rating,
      videoURL:videoURL,
      Origine:Origine,  
      Datesortie:Datesortie,  
      Genre:Genre,  
      duree:duree,  
      Qualite:Qualite, 
    }];
    setShow(false);
    setMovies(newMovies);
  }
   return (
<>
< div className="container">
<Navbar  expand="lg" bg="dark" variant="dark">
<Container fluid>
  <Navbar.Brand href="#">Film Streaming</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
  <div className="input-group">
  <Button variant="outline-success" onClick={handleShow}>Ajouter Film</Button>
    <Modal  expand="lg" bg="dark" variant="dark"  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <MovieCard Addmovies={Addmovies}setShow={setShow} handleClose={handleClose}></MovieCard>
      </Modal.Body>
    </Modal>
</div>
<div className="rating rating2">
    <Button variant="outline-success"onClick={()=>setrateSersch("")}>reset rate</Button>
    <a href="#5" title="Give 5 stars"onClick={()=>setrateSersch("5")}>★</a>
    <a href="#4" title="Give 4 stars"onClick={()=>setrateSersch("4")}>★</a>
    <a href="#3" title="Give 3 stars"onClick={()=>setrateSersch("3")}>★</a>
    <a href="#2" title="Give 2 stars"onClick={()=>setrateSersch("2")}>★</a>
    <a href="#1" title="Give 1 stars"onClick={()=>setrateSersch("1")}>★</a>
</div>
    <Form className="d-flex">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={e=>setSersch(e.target.value.toLowerCase())}/>
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>
</div>
    <div className="body-movie">
    {
    movies
    .filter((mov)=>
            mov.title.toLowerCase().trim().includes(filterTitle)&&
            (mov.rating.includes (filterRating))
          )
     .map((mov)=>
            (
              <Link  to={`/${mov.id}`}><Movie movie={mov} index={mov.id} key={mov.id} ></Movie></Link>     
            )
          )
    }
    </div>
    </>
  );
}
export default MovieList;