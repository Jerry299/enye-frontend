import React, { useEffect, useState } from "react";
import "./Home.css";
import Dropdown from "../utilities/Dropdown";
import SearchBox from "../utilities/SearchBox";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import Loading from "../utilities/Loading";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [genderFilter, setGenderFilter] = useState("All");
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      const res = await fetch("http://api.enye.tech/v1/challenge/records");
      const data = await res.json();
      setLoading(false);
      setProfiles(data.records.profiles);
      setTotalPages(Math.ceil(data.records.profiles.length / profilesPerPage));
    };
    fetchProfiles();
  }, [genderFilter, profilesPerPage]);

  //paginate function, change page
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //handle changes in dropdown
  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
  };

  // funtion to filter the profiles display when dropdown is changed

  const filterProfiles = (gender) => {
    if (gender === "All") {
      return profiles.map((profile) => profile);
    }
    return profiles.filter((profile) => {
      return profile.Gender === gender;
    });
  };
  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filterBySearch = () => {
    // we can now search the result of filterProfiles function which return an array
    return filterProfiles(genderFilter).filter((prof) => {
      return prof.UserName.includes(searchField);
    });
  };

  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="welcome-header">Welcome To Transactions Center.</h2>
        </div>
        <div className="nav-row">
          <div className="col-sm-4 navigation-item">
            <Dropdown
              filteredBy={"Gender"}
              options={["All", "Male", "Female", "Prefer to skip"]}
              onGenderChange={handleGenderChange}
            />
          </div>
          <div className="col-sm-4 navigation-item">
            <SearchBox handleSearchChange={handleSearchChange} />
          </div>
          <div className="col-sm-4 navigation-item">
            <Dropdown filteredBy={"Credit Card Type"} options={["JCB"]} />
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
                // profiles={filterProfiles}
                // filterBySearch={filterBySearch}
                profiles={filterBySearch}
                profilesPerPage={profilesPerPage}
                currentPage={currentPage}
                genderFilter={genderFilter}
                searchField={searchField}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
