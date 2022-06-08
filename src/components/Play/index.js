import ReactPlayer from "react-player";

import "./index.css";

const Play = (props) => {
  const { detail } = props;

  const { title, URL, tags } = detail;
  let tagText = "";
  for (let item of tags) {
    tagText = tagText + " | " + item;
  }

  return (
    <div className="play-container">
      <div className="player-container-inner">
        <h1 className="video-play-heading">Video Player</h1>
        <ReactPlayer
          className="react-player"
          height="100%"
          width="100%"
          url={URL}
          playing={false}
          controls
        />

        <p className="detail-about-video-para">{`${title}${tagText}`}</p>
      </div>
    </div>
  );
};

export default Play;
