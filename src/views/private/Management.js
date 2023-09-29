import { useEffect, useState } from "react";
import "./Management.css";
import FormEditMovie from "./components/FormEditMovie";
import TableMovie from "./components/TableMovie";
import { Toaster } from "react-hot-toast";
import FormNewMovie from "./components/FormNewMovie";

/**
 * Function to sort data alphabetically
 * @param {*} arr
 * @returns
 */
function sortArray(arr) {
  arr.sort((a, b) => {
    if (a.genre.name < b.genre.name) {
      return -1;
    }
    if (a.genre.name > b.genre.name) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return arr;
}

function ManagementMovie() {
  //declarate variables
  const [dataMovie, setDataMovie] = useState([]);
  const [movieObject, setMovieObject] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalNew, setShowModalNew] = useState(false);

  /**
   * function to get movie data
   */
  const reqApiMovies = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    setDataMovie(sortArray(characterApi));
  };

  /**
   * Get the data
   */
  useEffect(() => {
    reqApiMovies();
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        {showModalEdit && (
          <FormEditMovie
            characterApiMovie={movieObject}
            setShowModal={setShowModalEdit}
            showModal={showModalEdit}
          ></FormEditMovie>
        )}

        {showModalNew && (
          <FormNewMovie
            setShowModalNew={setShowModalNew}
            showModalNew={showModalNew}
            reqApiMovies={reqApiMovies}
          ></FormNewMovie>
        )}

        <h2>Movie management</h2>
        <div className="button-new-movie">
          {" "}
          <button
            className="login-button"
            onClick={(e) => setShowModalNew(true)}
          >
            New movie <i className="fas fa-plus"></i>
          </button>
        </div>
        <TableMovie
          dataMovie={dataMovie}
          setMovieObject={setMovieObject}
          setShowModal={setShowModalEdit}
          setDataMovie={setDataMovie}
          reqApiMovies={reqApiMovies}
        ></TableMovie>
      </div>
    </>
  );
}

export default ManagementMovie;
