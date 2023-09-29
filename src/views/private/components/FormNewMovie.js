import { useState } from "react";
import Modal from "../../../components/Modal";
import imageLogo from "../../../assets/img/img-icon.jpg";
import toast from "react-hot-toast";
import { useEffect } from "react";

/**
 * Function by render errors, alerts
 * @param {*} param0
 * @returns
 */
function AlertObligatoryField({ controlName, isInvalidForm }) {
  return (
    <>
      {isInvalidForm === false && controlName === "" && (
        <span style={{ color: "red" }}> Obligatory field </span>
      )}
    </>
  );
}

/**
 * Function to validate if the form data is filled out
 * @param {*} controlName
 * @returns
 */
function ValidateForm(controlName) {
  let result = false;
  controlName === "" || controlName === null
    ? (result = true)
    : (result = false);
  return result;
}

/**
 * Function to know if an image is null and send a default image
 * @param {*} path
 * @returns
 */
function replaceImageNullPath(path) {
  if (path === "" || path === null) {
    path = imageLogo;
  }
  return path;
}

/**
 * Validate input type number
 * @param {*} controlName
 * @returns
 */
function validateFormTypeNUmber(controlName) {
  let result = false;
  controlName <= 0 ? (result = true) : (result = false);
  return result;
}

/**
 * Function where the variables and data are defined to create the movie
 * @param {*} param0
 * @returns
 */
function FormNewMovie({ setShowModalNew, showModalNew, reqApiMovies }) {
  const [isInvalidForm, setInvalidForm] = useState();

  //Varibles para los atributos
  const [nameFilm, setNameFilm] = useState("");
  const [relaseDate, setRelaseDate] = useState("");
  const [rating, setRating] = useState(0);
  const [cast, setCast] = useState("");
  const [genre, setGenre] = useState("");
  const [team, setTeam] = useState("");
  const [imgMovie, setImageMovie] = useState("");

  const [genreArray, setGenreArray] = useState([]);

  /**
   * Get data genre
   */
  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/genre/");
    const genres = await api.json();
    setGenreArray(genres);
  };

  useEffect(() => {
    reqApi();
  }, []);

  /**
   * Close modal new
   */
  const closeModal = () => {
    setShowModalNew(false);
  };

  /**
   * Function to create the movie and validate if the fields are filled
   * @returns
   */
  const createMovie = () => {
    if (validateFormTypeNUmber(rating) === true) {
      toast.error("Change value rating");
      return;
    }

    if (nameFilm === '' || relaseDate === '' || rating===0 || cast === '' || genre ==='' || team === '' || imgMovie === '' ) {
      toast.error("Form is invalid");
      return;
    }
    const movie = {};
    movie.title = nameFilm;
    movie.release_date = relaseDate;
    movie.rating = rating;
    movie.cast = cast;
    const genreSelect = genreArray.filter((res) => res.id === Number(genre))[0];
    movie.genre =genreSelect;
    movie.team = team;
    movie.preview_image = imgMovie;
    fetch(`http://localhost:3000/movies/`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        toast.success("Create successfully");
        reqApiMovies();
        setShowModalNew(false);
      });
  };

  return (
    <>
      <Modal
        closeModal={closeModal}
        showModal={showModalNew}
        titleModal={"Create new movie"}
        content={
          <div className="modal-form">
            <form className="form-style-register">
              <div className="form">
                <label htmlFor="email">Enter the name of the movie:</label>
                <input
                  className={
                    ValidateForm(nameFilm) === true && nameFilm === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={nameFilm}
                  onChange={(e) => {
                    setNameFilm(e.target.value);
                    setInvalidForm(ValidateForm(nameFilm));
                  }}
                  type="text"
                  name="email"
                  id="email"
                />
                <AlertObligatoryField
                  controlName={nameFilm}
                  isInvalidForm={isInvalidForm}
                ></AlertObligatoryField>
              </div>
              <div className="form">
                <label htmlFor="relaseDate">Enter the release date:</label>
                <input
                  className={
                    ValidateForm(relaseDate) === true && relaseDate === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={relaseDate}
                  onChange={(e) => {
                    setRelaseDate(e.target.value);
                    setInvalidForm(ValidateForm(relaseDate));
                  }}
                  type="date"
                  name="relaseDate"
                  id="relaseDate"
                />
                <AlertObligatoryField
                  controlName={relaseDate}
                  isInvalidForm={isInvalidForm}
                ></AlertObligatoryField>
              </div>
              <div className="form">
                <label htmlFor="rating">Enter the rating:</label>
                <input
                  className={
                    ValidateForm(rating) === true &&
                    (rating === "" || validateFormTypeNUmber(rating))
                      ? "border-danger"
                      : "border-white"
                  }
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                    setInvalidForm(ValidateForm(rating));
                  }}
                  type="number"
                  id="rating"
                />
                <AlertObligatoryField
                  controlName={rating}
                  isInvalidForm={isInvalidForm}
                ></AlertObligatoryField>
                {validateFormTypeNUmber(rating) && (
                  <span style={{ color: "red" }}>
                    Enter a value other than 0
                  </span>
                )}
              </div>
              <div className="form">
                <label htmlFor="cast">Enter the cast:</label>
                <input
                  className={
                    ValidateForm(cast) === true && cast === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={cast}
                  onChange={(e) => {
                    setCast(e.target.value);
                    setInvalidForm(ValidateForm(cast));
                  }}
                  type="text"
                  id="cast"
                />
                <AlertObligatoryField
                  controlName={cast}
                  isInvalidForm={isInvalidForm}
                ></AlertObligatoryField>
              </div>
              <div className="form">
                <label htmlFor="genre">Enter the genre:</label>
                <select
                  className={
                    ValidateForm(genre) === true && genre === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  name="selectedFruit"
                  value={genre}
                  id="genre"
                  onChange={(e) => setGenre(e.target.value)}
                >
                  {genreArray.map((res) => (
                    <option key={res.id} value={res.id}>
                      {res.name}
                    </option>
                  ))}
                </select>
                <AlertObligatoryField
                  controlName={genre}
                  isInvalidForm={isInvalidForm}
                ></AlertObligatoryField>
              </div>
              <div className="form">
                <label htmlFor="team">Enter the team:</label>
                <textarea
                  className={
                    ValidateForm(team) === true && team === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={team}
                  onChange={(e) => {
                    setTeam(e.target.value);
                    setInvalidForm(ValidateForm(team));
                  }}
                  type="text"
                  id="team"
                />
                <AlertObligatoryField
                  controlName={team}
                  isInvalidForm={isInvalidForm}
                ></AlertObligatoryField>
              </div>
              <div className="form">
                <label htmlFor="image">Enter path image:</label>
                <textarea
                  id="image"
                  className={
                    ValidateForm(imgMovie) === true && imgMovie === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={imgMovie}
                  onChange={(e) => {
                    setImageMovie(e.target.value);
                    setInvalidForm(ValidateForm(imgMovie));
                  }}
                  type="text"
                />
                <AlertObligatoryField
                  controlName={imgMovie}
                  isInvalidForm={isInvalidForm}
                ></AlertObligatoryField>
              </div>
              <div className="image-view">
                <img
                  src={replaceImageNullPath(imgMovie)}
                  alt={"Imagen de la pelicula"}
                />
              </div>
            </form>
            <hr></hr>
            <div className="modal-footer">
              <div className="modal-buttons">
                <button className="btn-edit" onClick={createMovie}>
                  Create <i className="fas fa-save"></i>
                </button>
                <button
                  className="btn-delete"
                  onClick={(e) => setShowModalNew(false)}
                >
                  Cancel <i className="fas fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
export default FormNewMovie;
