import "./styles/style.css"

import logo from  "./img/logo.png";
import watsap from  "./img/watsap.png";
import strelka from  "./img/strelka.svg";
import maket from "./img/maket.png";
import works from "./img/works.png";
import geo from "./img/geo.png";

import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Price from "./components/price/Price"
import Works from "./components/works/Works"
import Company from "./components/company/Company"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">

        <Navbar />

        <Header />

        <Price/>

        <Works/>

        <Company/>

        <Footer/>



    </div>

  );
}

export default App;
