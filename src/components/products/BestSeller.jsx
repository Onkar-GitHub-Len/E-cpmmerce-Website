import React from "react";
import Products from "./Products";
import { bestsellers } from "../../data";

const BestSeller = () => {
  return <Products items={bestsellers} heading="Bestsellers" />;
};

export default BestSeller;
