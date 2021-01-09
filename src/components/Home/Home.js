import React, { useEffect, useState } from "react";
import "./Home.css";
import Dropdown from "../utilities/Dropdown";
import SearchBox from "../utilities/SearchBox";
import Table from "../Table/Table";

const Home = () => {
  const [profiles, SetProfiles] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    fetch("http://api.enye.tech/v1/challenge/records")
      .then((res) => res.json())
      .then((data) => SetProfiles(data.records.profiles))
      .catch((err) => console.log(err));
  }, []);

  console.log(profiles, "====profiles");
  // CreditCardNumber: "4335484786639577";
  // CreditCardType: "VISA";
  // DomainName: "lLHBvRf.com";
  // Email: "jTcPkRF@WtwFiig.ru";
  // FirstName: "Destany";
  // Gender: "Male";
  // LastLogin: "1985-11-15 19:49:13";
  // LastName: "Schimmel";
  // Latitude: -69.86103;
  // Longitude: -173.23515;
  // MacAddress: "78:9e:83:77:c9:e9";
  // PaymentMethod: "money order";
  // PhoneNumber: "351-062-8974";
  // URL: "http://www.eLLmNhN.ru/";
  // UserName: "NITESrS";

  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="welcome-header">Welcome To Transaction Center.</h2>
        </div>
        <div className="nav-row">
          <div className="col-sm-4">
            <Dropdown filteredBy={"Credit Card Type"} options={["VISA"]} />
          </div>
          <div className="col-sm-4">
            <Dropdown
              filteredBy={"Gender"}
              options={["MALE", "FEMALE", "PREFER TO SKIP"]}
            />
          </div>
          <div className="col-sm-4">
            <SearchBox />
          </div>
        </div>
        <h2 className="result-header">All Transactions.</h2>
        <hr />
        <div className="result-body container">
          <Table profiles={profiles} />
        </div>
      </div>
    </div>
  );
};

export default Home;
