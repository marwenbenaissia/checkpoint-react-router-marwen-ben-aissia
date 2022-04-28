import { useState } from "react";
import { Button ,Modal,Form,} from 'react-bootstrap';
import emptyVideo from './empty.mp4'
const  MovieCard =({Addmovies,setShow,handleClose})=> {

  const [title,settTitleNewMovie]= useState("");
  const [description,setDescriptionNewMovie]= useState("");
  const [posterURL,setPosterURLNewMovie]= useState("");
  const [rating,setRatingNewMovie]= useState(""); 
  const [videoURL,setvideoURLNewMovie]= useState(""); 
  const [Origine,setOrigineNewMovie]= useState(""); 
  const [Datesortie,setDatesortieNewMovie]= useState(""); 
  const [Genre,setGenreNewMovie]= useState(""); 
  const [dure,setdureNewMovie]= useState(""); 
  const [Qualite,setQualiteNewMovie]= useState(""); 
       
  const handlerSubmit = (e) => 
  {e.preventDefault();
    Addmovies(title,description,posterURL,videoURL,Origine,Datesortie,Genre,dure,Qualite,rating);
    setShow(false);
  }
  const verifPosterURL=(ver)=>{
    if (!ver.includes("https://"))
    {setPosterURLNewMovie("https://png.pngtree.com/background/20210710/original/pngtree-film-film-poster-background-material-picture-image_1055676.jpg");}
    else {setPosterURLNewMovie(ver);
    }
    }
    const verifVideoURL=(ver)=>{
      if (!ver.includes("https://"))
      {setvideoURLNewMovie({emptyVideo});}
      else {setvideoURLNewMovie(ver);
      }
    }

return (
<>
<Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >titre du film</Form.Label> 
            <Form.Control type ="text" onChange={e=>settTitleNewMovie(e.target.value)}></Form.Control>
            <Form.Label >Origine du film</Form.Label> 
            <Form.Control type ="text" onChange={e=>setOrigineNewMovie(e.target.value)}></Form.Control>
            <Form.Label >description du film</Form.Label> 
            <Form.Control type ="text" onChange={e=>setDescriptionNewMovie(e.target.value)}></Form.Control>
            <Form.Label >Qualité du film</Form.Label> 
            <select className="liste"  onChange={e=>setQualiteNewMovie(e.target.value)}>
                  <option value="HD">HD</option>
                  <option value="FULL-HD">FULL-HD</option>
                  <option value="3D">3D</option>
                  <option value="SD">SD</option>
                  <option value="HDLight">HDLight</option>
            </select>            <Form.Label>Genre du film</Form.Label>
            <select className="liste"  onChange={e=>setGenreNewMovie(e.target.value)}>
                  <option value="Action">Action</option>
                  <option value="Drame">Drame</option>
                  <option value="Fction">Fction</option>
                  <option value="Anime">Anime</option>
            </select>
            <Form.Label >Année de la sortier du film</Form.Label> 
            <select className="liste"  onChange={e=>setDatesortieNewMovie(e.target.value)}>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
            </select>            
            <Form.Label >dure du film</Form.Label> 
            <Form.Control type ="text" onChange={e=>setdureNewMovie(e.target.value)}></Form.Control>
            <Form.Label>url de coverture</Form.Label>
            <Form.Control type ="text" onChange={e=>verifPosterURL(e.target.value)}></Form.Control>
            <Form.Label >bande d'annonce du film</Form.Label> 
            <Form.Control type ="text" onChange={e=>verifVideoURL(e.target.value)}></Form.Control>
            <Form.Label>reating</Form.Label>
            <div className="rating rating2">
                  <a href="#5" title="Give 5 stars"onClick={()=>setRatingNewMovie("5")}>★</a>
                  <a href="#4" title="Give 4 stars"onClick={()=>setRatingNewMovie("4")}>★</a>
                  <a href="#3" title="Give 3 stars"onClick={()=>setRatingNewMovie("3")}>★</a>
                  <a href="#2" title="Give 2 stars"onClick={()=>setRatingNewMovie("2")}>★</a>
                  <a href="#1" title="Give 1 stars"onClick={()=>setRatingNewMovie("1")}>★</a>
            </div>
          </Form.Group>
        </Form>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}> Annuler </Button>
        <Button variant="outline-success" type="submit"onClick={handlerSubmit}> Add Movie </Button>
      </Modal.Footer>
    </>
)
      }
      export default MovieCard;