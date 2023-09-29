import './Chip.css';
function Chip({buttonName, setNameGenreUse,setauxDataMovie,dataMovies}){
    const handleClick = () => {
        setNameGenreUse('');
        setauxDataMovie(dataMovies);
    }
    return(
        <>
        <div className="chip">
            <button className="button-chip" onClick={handleClick}>{buttonName} X</button>
        </div>
        </>
    )
}
export default Chip;