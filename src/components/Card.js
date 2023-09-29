import "./Card.css";
import LazyLoad from 'react-lazyload';
import imageLogo from "../assets/img/img-icon.jpg";
import { useState } from "react";
import { useEffect } from "react";
/**
 * Card movie - present information  
 * @param {*} param0 
 * @returns 
 */

function Card({title,imgUrl, genero,openModalView,id}) {
  const [imagePath , setImagePath] = useState(imgUrl);
  useEffect(() => {
    setImagePath(imgUrl);
  }, [imgUrl]);

  return (
    <>
      <div className="card">
        <div className="header-card">
          <div onClick={(e)=>{openModalView(id)}}>
          <LazyLoad className="img-movie">
            <img 
              src={imagePath}
              alt={"Imagen referring to the movie"}
              onError={(e)=>{setImagePath(imageLogo)}}
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
