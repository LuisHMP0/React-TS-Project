import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainImage from './components/Shop/MainImage/MainImage';
import Products from './components/Shop/Products/Products';
import Footer from './components/Footer/Footer';
import UniqueProduct from './components/UniqueProduct/UniqueProduct';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';

function Shop() {
  return (
    <> 
      <Header />
      <MainImage />
      <Products />
      <Footer />
    </>
  );
}

function Home() {
  return (
    <>
      <Header /> 
      <HomePage />
      <Footer />
    </>
  );
}

function OnlyProduct() {
  return (
    <>
      <Header /> 
      <UniqueProduct />
      <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <Header /> 
      <AboutPage />
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<OnlyProduct />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
