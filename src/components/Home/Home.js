import React, { useEffect, useState } from "react";
import "./Home.css";
import Dropdown from "../utilities/Dropdown";
import SearchBox from "../utilities/SearchBox";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import Loading from "../utilities/Loading";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage, setProfilesPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [genderFilter, setGenderFilter] = useState("ALL");

  const fetchProfiles = async () => {
    console.log("fetching data");
    setLoading(true);
    const res = await fetch("http://api.enye.tech/v1/challenge/records");
    const data = await res.json();
    setLoading(false);
    setProfiles(data.records.profiles);
    setTotalPages(Math.ceil(data.records.profiles.length / profilesPerPage));
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  //paginate function, change page
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //handle changes in dropdown
  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
  };
  console.log(profiles, "=== profiles");
  // funtion to filter the profiles display when dropdown is changed

  const filterProfiles = (gender) => {
    let filteredProfile = [...profiles];
    if (gender === "Female") {
      return filteredProfile.filter((prof) => {
        return prof.Gender === "Female";
      });
    }
  };

  console.log(filterProfiles("Male"));

  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="welcome-header">Welcome To Transaction Center.</h2>
        </div>
        <div className="nav-row">
          <div className="col-sm-4">
            <Dropdown filteredBy={"Credit Card Type"} options={["JCB"]} />
          </div>
          <div className="col-sm-4">
            <Dropdown
              filteredBy={"Gender"}
              options={["ALL", "MALE", "FEMALE", "PREFER TO SKIP"]}
              onGenderChange={handleGenderChange}
            />
          </div>
          <div className="col-sm-4">
            <SearchBox />
          </div>
        </div>
        <h2 className="result-header">All Transactions.</h2>
        <hr />
        <div className="result-body container">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <Pagination
                totalPages={totalPages}
                handlePagination={handlePagination}
              />
              <Table
                profiles={filterProfiles}
                profilesPerPage={profilesPerPage}
                currentPage={currentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
