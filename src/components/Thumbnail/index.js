import ReactPlayer from "react-player";
import UrlContext from "../../context";
import "./index.css";

const Thumbnail = (props) => {
  const { detail } = props;
  const { id, title, URL, tags } = detail;
  let tagText = "";
  for (let item of tags) {
    tagText = tagText + " | " + item;
  }

  return (
    <UrlContext.Consumer>
      {(value) => {
        const { onChangeUrl, presentDetail } = value;

        const addActiveClass =
          presentDetail.id === id ? "iam-active-class" : "";

        const onVideoClick = () => {
          onChangeUrl(detail);
        };
        return (
          <li onClick={onVideoClick} className={`list-item ${addActiveClass}`}>
            <div>
              <ReactPlayer
                className="react-small-player"
                height="65px"
                width="120px"
                url={URL}
              />
            </div>

            <div className="card-container-in-thumb">
              <p>
                <span className="span-title">{title}</span>
                {tagText}
              </p>
            </div>
          </li>
        );
      }}
    </UrlContext.Consumer>
  );
};

export default Thumbnail;
