import "./EpButton.scss";

const EpButton = ({ label, selected }) => {
    const handleClick = () => {
        console.log(`Clicked episode ${label}`);
        document.updateCurrentlyPlayingEpisode(label);
        document.startPlaying();
    };

    return (
        <button className={selected ? "selected" : ""} onClick={() => handleClick()}>Ep {label}</button>
    );
};

export default EpButton;
