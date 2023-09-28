import LazyLoad from "react-lazyload";
import "./About.css";
function About() {
  return (
    <>
      <div className="banner-header">
        <div className="banner-col">
          <div className="banner-description">
            <h2> Why should you use our platform?</h2>
            <p>
              This platform is developed for agile use when reviewing a new
              release movie.
            </p>
            <p>In it you can find filters that help you better find your favorite movie.</p>
          </div>
        </div>
        <div className="banner-col">
          <LazyLoad className="img-lazy">
          <img
            src="https://www.oriongovernance.com/dev-zone/wp-content/uploads/2022/09/data-globe2.png"
            alt="Imagen"
          />
          </LazyLoad>
        
        </div>
      </div>
      <div className="banner-end">
          <h3><a href="/">Review Content, select here !! <i classNames="fas fa-hand-pointer"></i></a></h3>
      </div>
    </>
  );
}

export default About;
