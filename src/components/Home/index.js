import { Component } from "react";

import "./index.css";
import Category from "../Category";
import Play from "../Play";
import UrlContext from "../../context";

class Home extends Component {
  state = {
    search_q: "",
    totalDetail: {
      id: 1,
      title: "Campfire Embers",
      URL:
        "https://d262gd3sdzodff.cloudfront.net/2ebf5c04-6beb-4486-948f-4c044a27d994/mp4/Campfire_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      tags: ["Ember", "Fire", "Log"],
    },
  };

  onChangeUrl = (totalDetailObj) => {
    this.setState({ totalDetail: totalDetailObj }, () => {});
  };

  inputChange = (value) => {
    const lowerCaseInputValue = value.toLowerCase();
    this.setState({ search_q: lowerCaseInputValue });
  };

  render() {
    const { totalDetail, search_q } = this.state;
    return (
      <>
        <div className="main-container">
          <UrlContext.Provider
            value={{
              search_q: search_q,
              inputChange: this.inputChange,
              presentDetail: totalDetail,
              onChangeUrl: this.onChangeUrl,
            }}
          >
            <Category />
            <Play detail={totalDetail} />
          </UrlContext.Provider>
        </div>
      </>
    );
  }
}

export default Home;
