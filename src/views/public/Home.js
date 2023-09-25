import './Home.css';
import Card from '../../components/Card';
function HeaderHome() {
    return (
        <div className="principal-title">
            <h2>All Orion movies online for free </h2>
        </div>
    );
}


function Home() {
    return (
        <>
            <HeaderHome></HeaderHome>
            <Card></Card>
        </>
    )
}
export default Home;