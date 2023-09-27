import { useEffect, useState } from "react";
import "./Management.css";
import Modal from "../../components/Modal";

function sortArray(arr) {
  arr.sort((a, b) => {
    // Compara por género primero
    if (a.genero < b.genero) {
      return -1;
    }
    if (a.genero > b.genero) {
      return 1;
    }

    if (a.titulo < b.titulo) {
      return -1; // a debería venir antes que b en el orden alfabético
    }
    if (a.titulo > b.titulo) {
      return 1; // b debería venir antes que a en el orden alfabético
    }
    return 0; // a y b son iguales en términos de orden alfabético
  });

  return arr;
}

function ManagementMovie() {
  const [showModal, setShowModal] = useState(false);

  const [dataMovie, setDataMovie] = useState([]);
  const [idMovie, setIdMovie] = useState(0);

  //Varibles para los atributos
  const [nameFilm, setNameFilm] = useState("");
  const [relaseDate, setRelaseDate] = useState("");
  const [rating, setRating] = useState(0);
  const [cast, setCast] = useState(0);
  const [genre, setGenre] = useState("");
  const [team, setTeam] = useState("");
  const [imgMovie, setImageMovie] = useState("");

  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    setDataMovie(sortArray(characterApi));
  };

  useEffect(() => {
    reqApi();
  }, []);

  const openModal = (id) => {
    const getMovieById = async () => {
      const apiMovie = await fetch("http://localhost:3000/movies/" + id);
      const characterApiMovie = await apiMovie.json();
      setIdMovie(id);
      console.log(characterApiMovie);

      setNameFilm(characterApiMovie.title);
      setRating(characterApiMovie.rating);
      setRelaseDate(characterApiMovie.release_date);
      setCast(characterApiMovie.cast);
      setGenre(characterApiMovie.genre.name);
      setTeam(characterApiMovie.team);
      setImageMovie(characterApiMovie.preview_image);
    };
    getMovieById();

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container">
        <Modal
          closeModal={closeModal}
          showModal={showModal}
          titleModal={"Edit Movie"}
          content={
            <div className="modal-form">
              <form className="form-style-register">
                <div className="form">
                  <label htmlFor="email">Enter the name of the movie:</label>
                  <input
                    className={
                      nameFilm === false && nameFilm === ""
                        ? "border-danger"
                        : "border-white"
                    }
                    value={nameFilm}
                    onChange={(e) => setNameFilm(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="form">
                  <label htmlFor="email">Enter the release date:</label>
                  <input
                    className={
                      relaseDate === false && relaseDate === ""
                        ? "border-danger"
                        : "border-white"
                    }
                    value={relaseDate}
                    onChange={(e) => setRelaseDate(e.target.value)}
                    type="date"
                  />
                </div>
                <div className="form">
                  <label htmlFor="email">Enter the rating:</label>
                  <input
                    className={
                      rating === false && rating === ""
                        ? "border-danger"
                        : "border-white"
                    }
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    type="number"
                  />
                </div>
                <div className="form">
                  <label htmlFor="email">Enter the cast:</label>
                  <input
                    className={
                      cast === false && cast === ""
                        ? "border-danger"
                        : "border-white"
                    }
                    value={cast}
                    onChange={(e) => setCast(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="form">
                  <label htmlFor="email">Enter the genre:</label>
                  <input
                    className={
                      genre === false && genre === ""
                        ? "border-danger"
                        : "border-white"
                    }
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="form">
                  <label htmlFor="email">Enter the team:</label>
                  <textarea
                    className={
                      team === false && team === ""
                        ? "border-danger"
                        : "border-white"
                    }
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="form">
                  <label htmlFor="email">Enter path image:</label>
                  <textarea
                    className={
                      imgMovie === false && imgMovie === ""
                        ? "border-danger"
                        : "border-white"
                    }
                    value={imgMovie}
                    onChange={(e) => setImageMovie(e.target.value)}
                    type="text"
                  />
                 
                  
                </div>
                <div className="image-view">
                  <img src={imgMovie} alt={"Imagen de la pelicula"}/>
                  </div>
              </form>
            </div>
          }
        />

        <h2>Film management</h2>
        <table className="table">
          <thead>
            <tr className="table-head">
              <th>ID</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Relase date</th>
              <th>Cast & crew</th>
              <th>Genre</th>
              <th>Team</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {dataMovie.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.rating}</td>
                <td>{item.release_date}</td>
                <td>{item.cast}</td>
                <td>{item.genre.name}</td>
                <td>{item.team}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={(e) => {
                      openModal(item.id);
                    }}
                  >
                    Edit <i className="fas fa-pencil"></i>
                  </button>
                </td>
                <td>
                  <button className="btn-delete">
                    Delete <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManagementMovie;
