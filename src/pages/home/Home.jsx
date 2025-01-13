import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import NewArrivals from "../../components/products/NewArrivals";
import BestSeller from "../../components/products/BestSeller";
import Newsletter from "../../components/newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <NewArrivals />
      <BestSeller />
      <Newsletter />
    </div>
  );
};

export default Home;
