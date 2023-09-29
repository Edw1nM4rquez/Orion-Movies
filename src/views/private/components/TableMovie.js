import { useMemo } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Pagination from "../../../assets/js/Pagination";
import './TableMovie.css'

/**
 * Function Table
 */
function TableMovie({ dataMovie, setMovieObject, setShowModal, reqApiMovies }) {

  /**
   * Get movie data by id
   * @param {*} id 
   */
  const openModal = (id) => {
    const getMovieById = async () => {
      const apiMovie = await fetch("http://localhost:3000/movies/" + id);
      const characterApiMovie = await apiMovie.json();
      setMovieObject(characterApiMovie);
      setShowModal(true);
    };
    getMovieById();
  };

  /**
   * delete movie
   * @param {*} id 
   */
  const deleteMovie = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
      // body: JSON.stringify(''),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        toast.success("Delete successfully");
        reqApiMovies();
        setShowModal(false);
      });
  };

  
  let PageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataMovie.slice(firstPageIndex, lastPageIndex);
  }, [PageSize, dataMovie, currentPage]);

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
          {currentTableData.map((item) => (
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
                <button
                  className="btn-delete"
                  onClick={(e) => deleteMovie(item.id)}
                >
                  Delete <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-footer">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={dataMovie.length}
              pageSize={PageSize}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </div>
    </>
  );
}
export default TableMovie;
