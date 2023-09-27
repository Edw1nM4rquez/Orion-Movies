import "./Home.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import Slide from "./../../components/Slide";
import Chip from "../../components/Chip";
import toast, { Toaster } from "react-hot-toast";

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
  if (a.genre < b.genre) {
    return -1;
  }
  if (a.genre > b.genre) {
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

function Home() {
  const [dataMovies, setData] = useState([]);
  const [auxData, setauxData] = useState([]);
  const [search, setSearch] = useState("");
  const [nameGenderUse, setNameGenderUse] = useState("");

  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    setData(sortArray(characterApi));
    setauxData(characterApi);
  };

  const filterData = () => {
    setauxData(dataMovies);
    let newFilterData = dataMovies.filter(
      (res) => ((res.title).toLowerCase()).indexOf(search.toLowerCase()) !== -1
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

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
          <div className="content-movies">
            {auxData.map((item, key) => (
              <Card
                title={item.title}
                imgUrl={item.preview_image}
                genero={item.genre.name}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
