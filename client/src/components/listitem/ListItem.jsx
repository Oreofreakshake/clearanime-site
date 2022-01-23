import {
    Add,
    PlayArrow,
    ThumbDownOutlined,
    ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./ListItem.scss";

const ListItem = ({ index, malid }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        console.log(`Clicked ${malid}`);
        document.getElementsByClassName("watch")[0].classList.add("display");

        document.setCurrentlyPlayingAnime(malid);
        document.updateCurrentlyPlayingEpisode("0");
        document.startPlaying();
    };

    let mal_details = document.anime_data.find(element => element.mal_details.id === malid).mal_details;

    return (
        <div
            className="listitem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleClick()}
        >
            <img
                src={mal_details.main_picture.medium}
                alt="cover"
            ></img>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                    <span>{mal_details.title}</span>
                </div>
                <div className="itemInfoTop">
                    <span>2 hours and 3 minutes</span>
                    <span className="limit">{mal_details.rating.toUpperCase()}</span>
                    <span>{mal_details.start_season.year}</span>
                </div>
                <div className="desc">
                    {mal_details.synopsis}
                </div>
                <div className="genre">Adventure</div>
            </div>
        </div>
    );
};

export default ListItem;
