import React from "react";
import "./SearchResult.css";
import { Grid } from "@mui/material";
import allProducts from "../Assest/allProducts";
import { useNavigate } from "react-router-dom";

export default function SearchResult() {
  const navigate = useNavigate();
  return (
    <div className="searchResult-container">
      <div className="latest-trends">
        <p className="latest-trends-header">Latest Trends</p>
        <Grid container spacing={2} gap={4}>
          {allProducts.slice(9, 14).map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                md={8}
                lg={2}
                key={index}
                className="searchResult-card"
              >
                <div  onClick={()=>navigate("/products")}>
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="searchResult-cardimage"
                    />
                    <p style={{ fontSize: "14px" }}>{item.name}</p>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className="popular-suggestion">
        <p className="popular-suggestion-header">Popular suggestions</p>
        <div className="popular-suggestion-list">
          <p>Striped shirt dress</p>
          <p>Satin shirts</p>
          <p>Denim jumpsuit</p>
          <p>Leather dresses</p>
          <p>Solid tshirts</p>
        </div>
      </div>
    </div>
  );
}
