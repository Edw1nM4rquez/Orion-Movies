
import "./Slide.css";
function CategoryFilter({
  filterCategoryData,
  nameGenderUse,
  setNameGenderUse,
}) {
  //const [optionRadio, setOptionRadio] = useState('');

  return (
    <>
      <div className="category-filter">
        <h3>Filter Gender</h3>
        <div className="form-radio">
          <input
            type="radio"
            id="adventure"
            onChange={(e) => {
              setNameGenderUse(e.target.value);
              filterCategoryData(e.target.value);
            }}
            value="Adventure"
            checked={
              nameGenderUse === "Adventure" && nameGenderUse === "Adventure"
            }
          />
          <label htmlFor="adventure">Adventure</label>
        </div>
        <div className="form-radio">
          <input
            type="radio"
            id="romance"
            name="romance"
            value="Romance"
            onChange={(e) => {
              setNameGenderUse(e.target.value);
              filterCategoryData(e.target.value);
            }}
            checked={nameGenderUse === "Romance"}
          />
          <label htmlFor="romance">Romance</label>
        </div>
        <div className="form-radio">
          <input
            type="radio"
            id="mistery"
            name="mistery"
            value="Mystery"
            onChange={(e) => {
              setNameGenderUse(e.target.value);
              filterCategoryData(e.target.value);
            }}
            checked={nameGenderUse === "Mystery"}
          />
          <label htmlFor="mistery">Mystery</label>
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
