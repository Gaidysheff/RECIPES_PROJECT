import React from "react";
import construction_one from "../../assets/Page_Under_Construction.jpg";
import construction_two from "../../assets/under-construction-sign.jpg";

const GlobalSvgSelector = (id) => {
  switch (id) {
    case "not-found-one":
      return <img src={construction_one} alt="Under Construction" />;

    case "not-found-two":
      return <img src={construction_two} alt="Under Construction" />;

    default:
      return null;
  }
};

export default GlobalSvgSelector;
