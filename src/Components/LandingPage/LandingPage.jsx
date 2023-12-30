import React, { useState } from "react";
import CompanyLogo from "../Assest/CompanyLogo.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./LandingPage.css";
import SearchResult from "../SearchResult/SearchResult";

export default function LandingPage() {
  const [toggle, setToggle] = useState(false);
  const handleSearchResult = () => {
    setToggle(!toggle);
  };
  return (
    <div className="landingPage-container">
      <img src={CompanyLogo} alt="CompanyLogo" className="company-logo" />
      <div className="landingPage-searchBar" onClick={handleSearchResult}>
        <SearchBar />
      </div>
      <div className="searchResult">
            {toggle ? <SearchResult /> : <></>}
        </div>
    </div>
  );
}
