import "./Card.css";
import './SkeletonCard.css'
import LazyLoad from 'react-lazyload';
import imageLogo from "../assets/img/img-icon.jpg";
import { useState } from "react";
import { useEffect } from "react";

function EskeletonCard() {

  return (
    <>
      <div className="card">
        <div className="header-card">
          <div>
          <LazyLoad className="img-movie">
            <img 
              src={imageLogo}
              alt={"Imagen referring to the movie"}
            />
             </LazyLoad>
          </div>
        </div>
        <h3 className="title-card-skeleton">-</h3>
        <div className="genero">
        <span className="genre-des title-card-skeleton">-</span>
        </div>
      </div>
    </>
  );
}

export default EskeletonCard;
