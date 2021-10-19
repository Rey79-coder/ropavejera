import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";
import JumbotronAbout from "../components/About";
import Cart from '../components/Cart';
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container">
      <Banner />    
      <CategoryMenu />
      <ProductList />
      <Jumbotron />
      <JumbotronAbout />
      <Cart />
    </div>
  );
};

export default Home;
