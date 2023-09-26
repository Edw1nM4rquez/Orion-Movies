import './Chip.css';
function Chip({buttonName}){

    return(
        <>
        <div className="chip">
            <button className="button-chip">{buttonName} X</button>
        </div>
        </>
    )
}
export default Chip;