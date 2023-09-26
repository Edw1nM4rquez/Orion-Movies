import "./Home.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import Slide from "./../../components/Slide";
import Chip from "../../components/Chip";
function HeaderHome() {
  return (
    <div className="principal-title">
      <h2>All Orion movies online for free </h2>
    </div>
  );
}

function Home() {
  const [data, setData] = useState([]);
  const [auxData, setauxData] = useState([]);
  const [search, setSearch] = useState("");
  const [nameGenderUse, setNameGenderUse] = useState("");
  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    setData(characterApi);
    setauxData(characterApi);
  };

  const filterData = () => {
    setauxData(data);
    let newFilterData = data.filter((res) => res.titulo.indexOf(search) !== -1);
    setauxData(newFilterData);
  };

  const filterCategoryData = (gender) => {
    console.log("render", gender);
    setNameGenderUse(gender);
    setauxData(data);
    let newFilterData = data.filter((res) => res.genero.indexOf(gender) !== -1);
    setauxData(newFilterData);
  };

  useEffect(() => {
    reqApi();
  }, []);

  return (
    <>
      <HeaderHome></HeaderHome>
      <div className="containerHome">
        <div className="web-view-movies">
          <Slide
            setSearch={setSearch}
            search={search}
            setauxData={setauxData}
            data={data}
            filterCategoryData={filterCategoryData}
            filterData={filterData}
          ></Slide>
        </div>
        <div className="movies">
          <div className="container-chip">
            { nameGenderUse !=='' && <Chip buttonName={nameGenderUse}></Chip>}
          </div>
          <div className="content-movies">
          {auxData.map((item, key) => (
            <Card
              title={item.titulo}
              imgUrl={item.imagen_previsualizacion}
              genero={item.genero}
            ></Card>
          ))}
        </div>
        </div>
        
      </div>
    </>
  );
}
export default Home;
