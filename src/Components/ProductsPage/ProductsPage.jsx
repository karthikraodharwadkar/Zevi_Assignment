import React, { createContext, useState } from "react";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import ProductCard from "../ProductCard/ProductCard";
import CompanyLogo from "../Assest/CompanyLogo.svg";
import "./ProductsPage.css";

export const productContext = createContext();

export default function ProductsPage() {
  const [brandFilter, setBrandFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);

  const handleBrandFilter = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setBrandFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setBrandFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  const handlePriceFilter = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setPriceFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setPriceFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  const handleRatingFilter = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setRatingFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setRatingFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  return (
    <div className="ProductsPage-container">
      <productContext.Provider
        value={{
          brandFilter,
          priceFilter,
          ratingFilter,
          handleBrandFilter,
          handlePriceFilter,
          handleRatingFilter,
        }}
      >
        <div className="ProductsPage-category-filter">
          <Filters />
        </div>
        <div className="ProductsPage-right-section">
          <div className="ProductsPage-searchBar-logo">
            <SearchBar />
            <img
              src={CompanyLogo}
              alt="ProductPage-CompanyLogo"
              style={{ width: "86px", height: "44px" }}
            />
          </div>
          <div className="ProductsPage-Products-section">
            <ProductCard />
          </div>
        </div>
      </productContext.Provider>
    </div>
  );
}
