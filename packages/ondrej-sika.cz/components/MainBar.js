import React from "react";

const MainBar = props => (
  <div>
    <div className="bar-grey">
      <div className="container pt-4 pb-4">
        <h1 className="text-white pt-3 pb-3">{props.MainBarHeader}</h1>
        <p className="text-white" style={{ fontSize: "18px" }}>
          {props.MainBarText}
        </p>
      </div>
    </div>
  </div>
);

export default MainBar;
