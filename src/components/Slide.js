import { useState } from "react";
import "./Slide.css";
import { useEffect } from "react";

/**
 * Function that shows us the categories or genres
 * Dynamically list existing genres
 * @param {*} param0 
 * @returns 
 */
function CategoryFilter({
  filterCategoryData,
  nameGenderUse,
  setNameGenderUse,
}) {
  const [genreArray, setGenreArray] = useState([]);

  /**
   * Get the genres
   */
  const reqApiGenre = async () => {
    const api = await fetch("http://localhost:3000/genre/");
    const genres = await api.json();
    setGenreArray(genres);
  };

  useEffect(() => {
    reqApiGenre();
  }, []);

  return (
    <>
      <div className="category-filter">
        <h3>Filter Gender</h3>
        <div className="category-container">
          {genreArray.map((genre) => (
            <div className="form-radio" key={genre.id}>
              <input
                type="radio"
                id={genre.name}
                onChange={(e) => {
                  setNameGenderUse(e.target.value);
                  filterCategoryData(e.target.value);
                }}
                value={genre.name}
                checked={
                  nameGenderUse === genre.name && nameGenderUse === genre.name
                }
              />
              <label htmlFor={genre.name}>{genre.name}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Function to show movie genres and create an entry to search for movies by name
 * @param {*} param0 
 * @returns 
 */
function SlideInputSearch({
  setSearchName,
  searchName,
  setauxDataMovie,
  dataMovies,
  filterData,
  filterCategoryData,
  nameGenderUse,
  setNameGenreUse,
}) {
  return (
    <>
      <div className="Search">
        <h3> Filter name</h3>
        <input
          type="text"
          className="inputText"
          value={searchName}
          placeholder="Enter the name"
          onChange={(e) => {
            setSearchName(e.target.value);
            if (e.target.value === "") {
              setauxDataMovie(dataMovies);
            }
          }}
        ></input>
        <button className="search-button" typeof="button" onClick={filterData}>
          {" "}
          Search
        </button>
      </div>
      <div className="category">
        <CategoryFilter
          filterCategoryData={filterCategoryData}
          nameGenderUse={nameGenderUse}
          setNameGenderUse={setNameGenreUse}
        ></CategoryFilter>
      </div>
    </>
  );
}

export default SlideInputSearch;
