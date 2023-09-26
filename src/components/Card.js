import "./Card.css";

function Card() {
  return (
    <>
      <div className="card">
        <div className="header-card">
          <div className="img-movie">
            <img
              src={"https://roa.ups.edu.ec/assets/img/teacherf.png"}
              alt={"Imagen referente a la pelicula"}
            />
          </div>
        </div>
        <h3 className="title-card">Test</h3>
      </div>
    </>
  );
}

export default Card;
