import "./Home.css";
import Card from "../../components/Card";
import { useEffect, useState, useMemo } from "react";
import Slide from "./../../components/Slide";
import Chip from "../../components/Chip";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../assets/js/Pagination";
import EskeletonCard from "../../components/SkeletonCard";
import FormViewMovie from "./components/FormViewMovie";

/**
 * Create header home
 * @returns 
 */
function HeaderHome() {
  return (
    <div className="principal-title">
      <h2>All Orion movies online for free </h2>
    </div>
  );
}

/**
 * Function to sort the data, by gender and alphabetical order
 * @param {*} arr 
 * @returns 
 */
function sortArray(arr) {
  arr.sort((a, b) => {
    
  const nameOne = a.title.toLowerCase();
  const nameTwo = b.title.toLowerCase();
  if (nameOne < nameTwo) return -1;
  if (nameOne > nameTwo) return 1;

  const genreOne = a.genre.name.toLowerCase();
  const genreTwo = b.genre.name.toLowerCase();
  if (genreOne < genreTwo) return -1;
  if (genreOne > genreTwo) return 1;
  
    return 0;

    
  });

  return arr;
}

/**
 * load image sequentially
 * @param {*} path 
 * @returns 
 */
function reloadDataImage(path) {
  let newPath = path + `?timestamp=${new Date().getTime()}`;
  return newPath;
}

/**
 * Design root function
 * @returns 
 */
function Home() {
  const [dataMovies, setData] = useState([]);
  const [auxDataMovie, setauxDataMovie] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [nameGenreUse, setNameGenreUse] = useState("");
  const [showViewModal, setViewModal] = useState(false);
  const [movieObject, setMovieObject] = useState({});

  /**
   * get date movies
   */
  const getMoviesDataApi = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    setData(sortArray(characterApi));
    setauxDataMovie(characterApi);
  };

  /**
   * filter by name movie 
   * @returns 
   */
  const filterData = () => {
    let newFilterData = dataMovies.filter(
      (res) => res.title.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
    );
    if (newFilterData.length === 0) {
      toast.error("No name matches");
      setauxDataMovie(dataMovies);
      return;
    }
    setauxDataMovie(newFilterData);
  };

  /**
   * Filter by category or genre
   * @param {*} genre  //id of the selected genre
   */
  const filterCategoryData = (genre) => {
    setNameGenreUse(genre);
    setauxDataMovie(dataMovies);
    let newFilterData = dataMovies.filter(
      (res) => res.genre.name.indexOf(genre) !== -1
    );
    setauxDataMovie(newFilterData);
  };

  useEffect(() => {
    getMoviesDataApi();
  }, []);

  /**
   * Open movie information view modal for the user 
   * @param {*} id 
   */
  const openModalView = (id) => {
    const getMovieById = async () => {
      const apiMovie = await fetch("http://localhost:3000/movies/" + id);
      const characterApiMovie = await apiMovie.json();
      setMovieObject(characterApiMovie);
      setViewModal(true);
    };
    getMovieById();
  };

  /**
   * Variables and function for pagination
   */
  let PageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return auxDataMovie.slice(firstPageIndex, lastPageIndex);
  }, [PageSize, auxDataMovie, currentPage]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {showViewModal && (
        <FormViewMovie
          characterApiMovie={movieObject}
          setviewModal={setViewModal}
          viewModal={showViewModal}
        ></FormViewMovie>
      )}

      <HeaderHome></HeaderHome>
      <div className="containerHome">
        <div className="web-view-movies">
          <Slide
            setSearchName={setSearchName}
            searchName={searchName}
            setauxDataMovie={setauxDataMovie}
            dataMovies={dataMovies}
            filterCategoryData={filterCategoryData}
            filterData={filterData}
            nameGenreUse={nameGenreUse}
            setNameGenreUse={setNameGenreUse}
          ></Slide>
        </div>
        <div className="movies">
          <div className="container-chip">
            {nameGenreUse !== "" && (
              <Chip
                buttonName={nameGenreUse}
                setNameGenreUse={setNameGenreUse}
                setauxDataMovie={setauxDataMovie}
                dataMovies={dataMovies}
              ></Chip>
            )}
          </div>
          <div className="pagination-footer">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={auxDataMovie.length}
              pageSize={PageSize}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </div>

          <div className="content-movies">
            {currentTableData.length === 0 &&
              currentTableData.map((item) => <EskeletonCard></EskeletonCard>)}
            {currentTableData.map((item, key) => (
              <Card
                key={key}
                title={item.title}
                imgUrl={reloadDataImage(item.preview_image)}
                genero={item.genre.name}
                openModalView={openModalView}
                id={item.id}
              ></Card>
            ))}
          </div>
          <div className="pagination-footer">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={auxDataMovie.length}
              pageSize={PageSize}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
