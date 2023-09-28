import { useState } from "react";
import "./Slide.css";
import { useEffect } from "react";
function CategoryFilter({
  filterCategoryData,
  nameGenderUse,
  setNameGenderUse,
}) {
  //const [optionRadio, setOptionRadio] = useState('');
  const [genreArray, setGenreArray] = useState([]);

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

function SlideInputSearch({
  setSearch,
  search,
  setauxData,
  dataMovies,
  filterData,
  filterCategoryData,
  nameGenderUse,
  setNameGenderUse,
}) {
  return (
    <>
      <div className="Search">
        <h3> Filter name</h3>
        <input
          type="text"
          className="inputText"
          value={search}
          placeholder="Enter the name"
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value === "") {
              setauxData(dataMovies);
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
          setNameGenderUse={setNameGenderUse}
        ></CategoryFilter>
      </div>
    </>
  );
}

export default SlideInputSearch;
