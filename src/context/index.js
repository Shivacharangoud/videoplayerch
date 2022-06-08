import React from "react";

const UrlContext = React.createContext({
  search_q: "",
  presentDetail: "",
  onChangeUrl: () => {},
  inputChange: () => {},
});

export default UrlContext;
