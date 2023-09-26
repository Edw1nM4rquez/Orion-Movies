import "./Card.css";

function Card({title,imgUrl, genero}) {
  return (
    <>
      <div className="card">
        <div className="header-card">
          <div className="img-movie">
            <img
              src={imgUrl}
              alt={"Imagen referente a la pelicula"}
            />
          </div>
        </div>
        <h3 className="title-card">{title}</h3>
        <div className="genero">
        <span>{genero}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
