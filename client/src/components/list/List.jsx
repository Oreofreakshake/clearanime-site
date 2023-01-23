import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import Listitem from "../listitem/ListItem";
import "./List.scss";

const List = (props) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance
                }px)`;
        }
    };

    let index = 0;

    return (
        <div className="list">
            <span className="listTitle">{props.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    {
                        document[props.data].map(malid =>
                        (
                            <Listitem key={malid.toString()} index={index++} malid={malid} />
                        )
                        )
                    }
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default List;
