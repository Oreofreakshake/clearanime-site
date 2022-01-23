import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Watch from "../watch/Watch";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Watch />
            <div className="home">
                <Navbar />
                <Featured />

                <List title="Top Anime" data="top_anime" />
                <List title="Top Airing" data="top_airing" />
                {/*<List title="Top Airing"/>*/}
            </div>
        </>
    );
};

export default Home;

//<Featured type="anime" />