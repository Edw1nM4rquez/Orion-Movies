
function TableMovie({ dataMovie, setMovieObject, setShowModal }) {
  const openModal = (id) => {
    const getMovieById = async () => {
      const apiMovie = await fetch("http://localhost:3000/movies/" + id);
      const characterApiMovie = await apiMovie.json();
      setMovieObject(characterApiMovie);
      setShowModal(true);
    };
    getMovieById();
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Relase date</th>
            <th>Cast & crew</th>
            <th>Genre</th>
            <th>Team</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {dataMovie.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.rating}</td>
              <td>{item.release_date}</td>
              <td>{item.cast}</td>
              <td>{item.genre.name}</td>
              <td>{item.team}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={(e) => {
                    openModal(item.id);
                  }}
                >
                  Edit <i className="fas fa-pencil"></i>
                </button>
              </td>
              <td>
                <button className="btn-delete">
                  Delete <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default TableMovie;
