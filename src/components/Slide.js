import { useState } from "react";
import "./Slide.css";
function CategoryFilter({filterCategoryData}) {
  const [optionRadio, setOptionRadio] = useState('');

  return (
    <>
      <div className="category-filter">
        <h3>Filter Category</h3>
        <div className="form-radio">
          <input
            type="radio"
            id="adventure"
            onChange={ (e) => {setOptionRadio(e.target.value) ; filterCategoryData(e.target.value);}}
            value="Aventura"
            checked={optionRadio === "Aventura"}
          />
          <label htmlFor="adventure">Adventure</label>
        </div>
        <div className="form-radio">
          <input
            type="radio"
            id="romance"
            name="romance"
            value="Romance"
            onChange={ (e) => {setOptionRadio(e.target.value) ; filterCategoryData(e.target.value);}}
            checked={optionRadio === "Romance"}
          />
          <label htmlFor="romance">Romance</label>
        </div>
        <div className="form-radio">
          <input
            type="radio"
            id="mistery"
            name="mistery"
            value="Misterio"
            onChange={ (e) => {setOptionRadio(e.target.value) ; filterCategoryData(e.target.value);}}
            checked={optionRadio === "Misterio"}
          />
          <label htmlFor="mistery">Mistery</label>
        </div>
      </div>
    </>
  );
}

function SlideInputSearch({ setSearch, search, setauxData, data, filterData ,filterCategoryData}) {
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
              setauxData(data);
            }
          }}
        ></input>
        <button className="search-button" typeof="button" onClick={filterData}>
          {" "}
          Search
        </button>
      </div>
      <div className="category">
        <CategoryFilter filterCategoryData={filterCategoryData}></CategoryFilter>
      </div>
    </>
  );
}

export default SlideInputSearch;
