import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../ProductsPage/ProductsPage";
import Grid from "@mui/material/Grid";
import { Rating } from "@mui/material";
import allProductsData from "../Assest/allProducts.js";
import { FiHeart } from "react-icons/fi";
import "./ProductCard.css";

export default function ProductCard() {
  const productCofig = useContext(productContext);

  const brandFilters = productCofig.brandFilter;
  const priceFilters = productCofig.priceFilter;
  const ratingFilters = productCofig.ratingFilter;

  const [currentData, setCurrentData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const applyFilters = (brandFilters, priceFilters, ratingFilters) => {
    let updatedData = [...currentData];
    if (brandFilters?.length > 0) {
      updatedData = updatedData.filter((item) =>
        brandFilters.includes(item.brand)
      );
    }
    if (ratingFilters?.length > 0) {
      updatedData = updatedData.filter((item) =>
        ratingFilters.includes(item.rating.toString())
      );
    }
    if (priceFilters?.length > 0) {
      updatedData = updatedData.filter((listings) => {
        let found = false;
        priceFilters.forEach((item) => {
          let low = item.split("to")[0];
          let high = item.split("to")[1];
          if (
            Number(listings.newPrice >= low) &&
            Number(listings.newPrice <= high)
          ) {
            found = true;
          }
        });
        return found;
      });
    }
    return updatedData;
  };

  const displayData = applyFilters(brandFilters, priceFilters, ratingFilters);

  const handleWishList = (id) => {
    if (!selectedItem.includes(id)) {
      setSelectedItem((prevstate) => [...prevstate, id]);
    } else {
      setSelectedItem((prevstate) => prevstate.filter((item) => item !== id));
    }
  };

  //console.log(displayData);

  useEffect(() => {
    setCurrentData(allProductsData);
  }, []);

  return (
    <div className="ProductCard-container">
      <Grid container spacing={2}>
        {displayData.map((item, index) => {
          return (
            <Grid item xs={12} md={4} lg={3} sm={6} style={{maxWidth:"100%"}}>
              <div className="card-container" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "325px",maxWidth:"100%" }}
                  className="product-image"
                />
                <FiHeart
                  onClick={() => handleWishList(item.id)}
                  className={
                    selectedItem.includes(item.id)
                      ? "redhearticon"
                      : "hearticon"
                  }
                />
                <p className="view-product">View Product</p>
                <p>
                  {item.brand} {item.name}
                </p>
                <p>
                  <span className="product-old-price">Rs. {item.oldPrice}</span>
                  <span className="product-new-price">Rs. {item.newPrice}</span>
                </p>
                <div className="rating-component">
                  <Rating
                    name="size-small"
                    value={item.rating}
                    size="small"
                    readOnly
                  />
                  <span>(210)</span>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
