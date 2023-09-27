import './Chip.css';
function Chip({buttonName, setNameGenderUse,setauxData,dataMovies}){

    const handleClick = () => {
        setNameGenderUse('');
        setauxData(dataMovies);
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