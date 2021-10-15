import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner"
import Cart from '../components/Cart';
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container">
      <Banner />    
      <CategoryMenu />
      <ProductList />
      <Jumbotron />
      <Cart />
    </div>
  );
};

export default Home;
