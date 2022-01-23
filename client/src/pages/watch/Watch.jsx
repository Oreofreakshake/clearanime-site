import { ArrowBackOutlined } from "@material-ui/icons";
import EpButton from "../../components/epbutton/EpButton";
import "./Watch.scss";

const Watch = () => {
    const handleBack = () => {
        document.getElementsByClassName("watch")[0].classList.remove("display");
        document.stopPlaying();
    };

    return (
        <div className="watch">
            <canvas id="canvas" />
            <div className="controls">
                <div className="back" onClick={() => handleBack()} >
                    <ArrowBackOutlined />
                    Home
                </div>
                <EpButton label="0" selected></EpButton>
                <EpButton label="1" selected></EpButton>
            </div>
        </div >
    );
};

export default Watch;
