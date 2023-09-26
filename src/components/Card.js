import "./Card.css";
import LazyLoad from 'react-lazyload';

function Card({title,imgUrl, genero}) {
  return (
    <>
      <div className="card">
        <div className="header-card">
          <div>
          <LazyLoad className="img-movie" debounce={false} >
            <img
              src={imgUrl}
              alt={"Imagen referente a la pelicula"}
            />
             </LazyLoad>
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
