import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MainImage from './components/Shop/MainImage/MainImage'
import Products from './components/Shop/Products/Products'

function Shop() {
  return (
    <> 
      <Header />
      <MainImage />
      <Products />
    </>
  )
}
function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Shop />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
