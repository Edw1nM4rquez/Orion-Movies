import { useState } from "react";
import Modal from "../../../components/Modal";
import imageLogo from "../../../assets/img/img-icon.jpg";
import './FormViewMovie.css'
import { useEffect } from "react";
function AlertObligatoryField({ controlName, isInvalidForm }) {
  return (
    <>
      {isInvalidForm === false && controlName === "" && (
        <span style={{ color: "red" }}> Obligatory field </span>
      )}
    </>
  );
}

function ValidateForm(controlName) {
  let result = false;
  controlName === "" || controlName === null
    ? (result = true)
    : (result = false);
  return result;
}

function imageNullPath(path) {
  if (path === "" || path === null) {
    path = imageLogo;
  }
  return path;
}


function FormViewMovie({ characterApiMovie, setviewModal, viewModal }) {
  const [isInvalidForm, setInvalidForm] = useState();

  //Varibles para los atributos
  const [nameFilm, setNameFilm] = useState(characterApiMovie.title || "");
  const [relaseDate, setRelaseDate] = useState(
    characterApiMovie.release_date || ""
  );
  const [rating, setRating] = useState(characterApiMovie.rating || 0);
  const [cast, setCast] = useState(characterApiMovie.cast || "");
  const [genre, setGenre] = useState(characterApiMovie.genre.id || "");
  const [team, setTeam] = useState(characterApiMovie.team || "");
  const [imgMovie, setImageMovie] = useState(
    characterApiMovie.preview_image || ""
  );

  const [genreArray, setGenreArray] = useState([]);

  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/genre/");
    const genres = await api.json();
    setGenreArray(genres);
  };

  useEffect(() => {
    reqApi();
  }, []);

  const closeModal = () => {
    setviewModal(false);
  };

  
  return (
    <>
      <Modal
        closeModal={closeModal}
        showModal={viewModal}
        titleModal={"View Detail Movie"}
        content={
          
          <div className="modal-form-view">
             <div className="image-view">
                <img
                  src={imageNullPath(imgMovie)}
                  alt={"Imagen de la pelicula"}
                />
              </div>
              <div className="detail-movie">
              <form className="form-style-register">
              <div className="form">
                <label htmlFor="email">Name of the movie:</label>
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
                  disabled
                />
              
              </div>
              <div className="form">
                <label htmlFor="relaseDate">Release date:</label>
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
                  disabled
                  type="date"
                  name="relaseDate"
                  id="relaseDate"
                />
              
              </div>
              <div className="form">
                <label htmlFor="rating">Rating:</label>
                <input
                disabled
                  className={
                    ValidateForm(rating) === true && rating === ""
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
               
              </div>
              <div className="form">
                <label htmlFor="cast">Cast:</label>
                <input
                disabled
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
              
              </div>
              <div className="form">
                <label htmlFor="genre">Genre:</label>
                <select
                disabled
                  name="selectedFruit"
                  value={genre}
                  id="genre"
                  onChange={(e) => setGenre(e.target.value)}
                >
                  {genreArray.map((res) => (
                    <option key={res.id} value={res.id}>{res.name}</option>
                  ))}
                </select>
               
              </div>
              <div className="form">
                <label htmlFor="team">Team:</label>
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
                  disabled
                />
             
              </div>
              {/* <div className="form">
                <label htmlFor="image">Path image:</label>
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
                  disabled
                />
              
              </div> */}
             
            </form>
            <hr></hr>
            <div className="modal-footer">
              <div className="modal-buttons">
                
                <button
                  className="btn-delete"
                  onClick={(e) => setviewModal(false)}
                >
                  Cancel <i className="fas fa-xmark"></i>
                </button>
              </div>
            </div>
              </div>
           
          </div>
        }
      />
    </>
  );
}
export default FormViewMovie;
