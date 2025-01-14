import React, { useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cardSlice";

const SingleProducts = () => {
  const dispatch = useDispatch();
  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  const colors = ["red", "purple", "teal", "green", "black"];
  const [selectedColor, setSelectedColor] = useState("");
  const handleCircleClick = (color) => {
    setSelectedColor(color);
    console.log(color);
  };

  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
  const [selectedsize, setSelectedsize] = useState("");
  const handleSizeClick = (size) => {
    setSelectedsize(size);
    console.log(size);
  };
  return (
    <div className="singleProduct-container">
      <Navbar />

      <div className="singleProduct-wrapper">
        {/* Product Image Section */}
        <div className="singleProduct-imageSection">
          <img src={product.img} class="singleProduct-image" />
        </div>

        {/* Product Info Section */}
        <div className="singleProduct-infoSection">
          <h2>{product.title}</h2>
          <p className="singleProduct-number">{product.price}</p>
          <h4 className="description-title">Description</h4>
          <p className="singleProduct-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim
            numquam possimus rerum. Exercitationem perferendis inventore
            provident numquam odio perspiciatis, minima modi consequuntur at
            reiciendis.
          </p>

          {/* Product Options Section */}
          <div className="singleProduct-options">
            {/* Colors Section */}
            <div className="colors-section">
              <h4>Colors</h4>
              <div className="colors">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="color-circle"
                    onClick={() => handleCircleClick(color)}
                    style={{
                      backgroundColor: color,
                      outline:
                        selectedColor === color ? `2px solid ${color}` : "",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Sizes Section */}
            <div className="sizes-section">
              <h4>Size</h4>
              <div className="sizes">
                {sizes.map((size) => (
                  <span
                    key={size}
                    className="size"
                    style={{
                      outline: selectedsize === size ? "2px solid black" : "",
                      borderRadius: "50%",
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="addToCart">
            <button onClick={() => handleAddtoCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProducts;
