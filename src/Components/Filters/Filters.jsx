import React, { useContext, useState } from "react";
import { productContext } from "../ProductsPage/ProductsPage";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import "./Filters.css";

export default function Filters() {
  const productCofig = useContext(productContext);
  const productBrand = ["Mango", "H&M"];
  const productPrice = ["0 to 500", "1000 to 3000"];
  const productRatings = ["5", "4", "3", "2", "1"];

  const [expanded, setExpanded] = useState([true, true, true]);
  console.log(expanded[0]);

  const handleAccordionExpand = (id) => () => {
    const newExpand = [...expanded];
    newExpand[id] = !newExpand[id];
    setExpanded(newExpand);
  };
  return (
    <>
      <div className="filters-container">
        <div className="filters-header">Search Results</div>
        <div className="accordion">
          <Accordion
            expanded={expanded[0]}
            onChange={handleAccordionExpand(0)}
            sx={{
              boxShadow: "none",
              borderBottom: "1px solid rgba(0, 0, 0, 0.20)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="category-filter-header">Brand</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {productBrand.map((brand, index) => {
                return (
                  <Typography key={index}>
                    <input
                      type="checkbox"
                      value={brand}
                      onChange={productCofig.handleBrandFilter}
                      checked={productCofig.brandFilter.includes(brand)}
                    />
                    {brand}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion">
          <Accordion
            expanded={expanded[1]}
            onChange={handleAccordionExpand(1)}
            sx={{
              boxShadow: "none",
              borderBottom: "1px solid rgba(0, 0, 0, 0.20)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="category-filter-header">
                Price Range
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {productPrice.map((price, index) => {
                return (
                  <Typography key={index}>
                    <input
                      type="checkbox"
                      value={price}
                      onChange={productCofig.handlePriceFilter}
                      checked={productCofig.priceFilter.includes(price)}
                    />
                    {price}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion">
          <Accordion
            expanded={expanded[2]}
            onChange={handleAccordionExpand(2)}
            sx={{
              boxShadow: "none",
              borderBottom: "1px solid rgba(0, 0, 0, 0.20)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="category-filter-header">
                Ratings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {productRatings.map((rating, index) => {
                return (
                  <Typography key={index}>
                    <input
                      type="checkbox"
                      value={rating}
                      onChange={productCofig.handleRatingFilter}
                      checked={productCofig.ratingFilter.includes(rating)}
                    />
                    <Rating
                      name="size-small"
                      value={rating}
                      size="small"
                      readOnly
                    />
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
