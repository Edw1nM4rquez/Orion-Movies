import "./Home.css";
import Card from "../../components/Card";
import { useEffect, useState, useMemo } from "react";
import Slide from "./../../components/Slide";
import Chip from "../../components/Chip";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../assets/js/Pagination";
import EskeletonCard from "../../components/SkeletonCard";
import FormViewMovie from "./components/FormViewMovie";

function HeaderHome() {
  return (
    <div className="principal-title">
      <h2>All Orion movies online for free </h2>
    </div>
  );
}

function sortArray(arr) {
  arr.sort((a, b) => {
    // Compara por género primero
    if (a.genre.name < b.genre.name) {
      return -1;
    }
    if (a.genre.name > b.genre.name) {
      return 1;
    }

    if (a.title < b.title) {
      return -1; // a debería venir antes que b en el orden alfabético
    }
    if (a.title > b.title) {
      return 1; // b debería venir antes que a en el orden alfabético
    }
    return 0; // a y b son iguales en términos de orden alfabético
  });

  return arr;
}

function reloadDataImage(path) {
  let newPath = path + `?timestamp=${new Date().getTime()}`;
  return newPath;
}

function Home() {
  let PageSize = 8;

  const [dataMovies, setData] = useState([]);
  const [auxData, setauxData] = useState([]);
  const [search, setSearch] = useState("");
  const [nameGenderUse, setNameGenderUse] = useState("");

  const [showViewModal, setViewModal] = useState(false);
  const [movieObject, setMovieObject] = useState({});

  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    setData(sortArray(characterApi));
    setauxData(characterApi);
  };

  const filterData = () => {
    setauxData(dataMovies);
    let newFilterData = dataMovies.filter(
      (res) => res.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    if (newFilterData.length === 0) {
      toast.error("No name matches");
      setauxData(dataMovies);
      return;
    }
    setauxData(newFilterData);
  };

  const filterCategoryData = (genre) => {
    setNameGenderUse(genre);
    setauxData(dataMovies);
    let newFilterData = dataMovies.filter(
      (res) => res.genre.name.indexOf(genre) !== -1
    );
    setauxData(newFilterData);
  };

  useEffect(() => {
    reqApi();
  }, []);

  const openModalView = (id) => {
    const getMovieById = async () => {
      const apiMovie = await fetch("http://localhost:3000/movies/" + id);
      const characterApiMovie = await apiMovie.json();
      setMovieObject(characterApiMovie);
      setViewModal(true);
    };
    getMovieById();
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return auxData.slice(firstPageIndex, lastPageIndex);
  }, [PageSize, auxData, currentPage]);
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
            setSearch={setSearch}
            search={search}
            setauxData={setauxData}
            dataMovies={dataMovies}
            filterCategoryData={filterCategoryData}
            filterData={filterData}
            nameGenderUse={nameGenderUse}
            setNameGenderUse={setNameGenderUse}
          ></Slide>
        </div>
        <div className="movies">
          <div className="container-chip">
            {nameGenderUse !== "" && (
              <Chip
                buttonName={nameGenderUse}
                setNameGenderUse={setNameGenderUse}
                setauxData={setauxData}
                dataMovies={dataMovies}
              ></Chip>
            )}
          </div>
          <div className="pagination-f">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={auxData.length}
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
          <div className="pagination-f">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={auxData.length}
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
