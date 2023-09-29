import { useState } from "react";
import Modal from "../../../components/Modal";
import imageLogo from "../../../assets/img/img-icon.jpg";
import "./FormViewMovie.css";


function imageNullPath(path) {
  if (path === "" || path === null) {
    path = imageLogo;
  }
  return path;
}

function FormViewMovie({ characterApiMovie, setviewModal, viewModal }) {

  //Varibles para los atributos
  const [nameFilm, setNameFilm] = useState(characterApiMovie.title || "");
  const [relaseDate, setRelaseDate] = useState(
    characterApiMovie.release_date || ""
  );
  const [rating, setRating] = useState(characterApiMovie.rating || 0);
  const [cast, setCast] = useState(characterApiMovie.cast || "");
  const [team, setTeam] = useState(characterApiMovie.team || "");
  const [imgMovie, setImageMovie] = useState(
    characterApiMovie.preview_image || ""
  );

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
            <div className="image-view disabled-img">
              <div className="content-view-img">
                <img
                  src={imageNullPath(imgMovie)}
                  alt={"Imagen de la pelicula"}
                />
                <h3 className="title-card card-height-title">{nameFilm}</h3>
                <div className="genero">
                  <span>{characterApiMovie.genre.name}</span>
                </div>
              </div>
            </div>
            <div className="detail-movie">
              <form className="form-style-register-view">
                <div className="form">
                  <label htmlFor="email">Name of the movie:</label>
                  <div className="label-description">
                    <label>{nameFilm}</label>
                  </div>
               
                </div>
                <div className="form">
                  <label htmlFor="relaseDate">Release date:</label>
                   <div className="label-description">
                    <label>{relaseDate}</label>
                  </div>
                </div>
                <div className="form">
                  <label htmlFor="rating">Rating:</label>
                  <div className="label-description">
                    <label>{rating} <i className="fas fa-star"></i></label>
                  </div>
                </div>
                <div className="form">
                  <label htmlFor="cast">Cast:</label>
                   <div className="label-description">
                    <label>{cast}</label>
                  </div>
                </div>
                <div className="form">
                  <label htmlFor="genre">Genre:</label>
                  <div className="label-description">
                    <label>{characterApiMovie.genre.name}</label>
                  </div>
                </div>
                <div className="form">
                  <label htmlFor="team">Team:</label>
                  <div className="label-description">
                    <label>{team}</label>
                  </div>
                
                </div>
              
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
