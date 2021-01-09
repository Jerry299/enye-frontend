import React from "react";
import "./Home.css";
import SimpleListMenu from "../utilities/Dropdown";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="welcome-header">Welcome To Transaction Center.</h2>
        </div>
        <div className="row">
          <div>hello there</div>
          <SimpleListMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
