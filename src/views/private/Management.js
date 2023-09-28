import { useEffect, useState } from "react";
import "./Management.css";
import FormEditMovie from "./components/FormEditMovie";
import TableMovie from "./components/TableMovie";
import { Toaster } from "react-hot-toast";
import FormNewMovie from "./components/FormNewMovie";


function sortArray(arr) {
  arr.sort((a, b) => {
    // Compara por género primero
    if (a.genre.name < b.genre.name) {
      return -1;
    }
    if (a.genre.name > b.genre.name) {
      return 1;
    }

    if (a.title < b.title) {
      return -1; // a debería venir antes que b en el orden alfabético
    }
    if (a.title > b.title) {
      return 1; // b debería venir antes que a en el orden alfabético
    }
    return 0; // a y b son iguales en términos de orden alfabético
  });

  return arr;
}


function ManagementMovie() {
  const [dataMovie, setDataMovie] = useState([]);
const [movieObject, setMovieObject] = useState({});
const [showModalEdit, setShowModalEdit] = useState(false);
const [showModalNew, setShowModalNew] = useState(false);


  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    setDataMovie(sortArray(characterApi));
  };

  useEffect(() => {
    reqApi();
  }, []);

  

  return (
    <>
     <Toaster position="top-right"
        reverseOrder={false} />
      <div className="container">

     {showModalEdit &&  <FormEditMovie
       characterApiMovie={movieObject}
       setShowModal={setShowModalEdit}
       showModal = {showModalEdit}
       ></FormEditMovie>}

{showModalNew &&  <FormNewMovie
       setShowModalNew={setShowModalNew}
       showModalNew = {showModalNew}
       ></FormNewMovie>}


        <h2>Film management</h2>
        <div className="button-new-movie"> <button className="login-button" onClick={(e)=> setShowModalNew(true)}>New movie <i className="fas fa-plus"></i></button></div>
       <TableMovie 
       dataMovie={dataMovie}
       setMovieObject={setMovieObject}
       setShowModal={setShowModalEdit}
       ></TableMovie>
      </div>
    </>
  );
}

export default ManagementMovie;
