import "./Home.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
function HeaderHome() {
  return (
    <div className="principal-title">
      <h2>All Orion movies online for free </h2>
    </div>
  );
}

function Home() {
  const [data, setData] = useState([]);
  const reqApi = async () => {
    const api = await fetch("http://localhost:3000/movies/");
    const characterApi = await api.json();
    console.log(characterApi);
    setData(characterApi);
  };

  useEffect(() => {
    reqApi();
  }, []);

  return (
    <>
      <HeaderHome></HeaderHome>
      <div className="content-movies">
        {data.map((item, key) => (
          <Card
            title={item.titulo}
            imgUrl={item.imagen_previsualizacion}
            genero={item.genero}
          ></Card>
        ))}
      </div>
    </>
  );
}
export default Home;
