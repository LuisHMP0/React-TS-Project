import './Footer.css'
import booksImg from './../Header/imgs/pilha-de-livros.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  }

  const goToShop = () => {
    navigate('/shop')
  }

  return (
  <>
    <footer>
        <ul className='logo'>
          <li> <a onClick={goToHome} href=""> <img src={booksImg} alt="logo" /> Books </a> </li>
        </ul>
        <ul className='credits'>
          <h2> Developers and Designer </h2>
          <li> <a href="https://www.linkedin.com/in/luis-henrique-marrocos-pinheiro-8b8a67246/"> Developer: Luís Henrique Marrocos </a> </li>
          <li> <a href="https://www.linkedin.com/in/thiago-felinto-819ba7201/"> Developer: Thiago Felinto  </a></li>
          <li> <a href="https://www.figma.com/design/R1JBemsz4bQIhhVIwu6Nv3/Untitled?node-id=0-1&t=aRGzoF6TmyfuBeTg-1"> Desingner: Figma </a> </li>
        </ul>
        <ul className='links'>
          <h2> Links </h2>
          <li> <a onClick={goToHome} href=""> Home </a> </li>
          <li> <a href=""> About </a> </li>
          <li> <a href=""> Contact </a> </li>
          <li> <a onClick={goToShop} href=""> Shop </a> </li>
        </ul>
    </footer>
  </>
  )
}

export default Footer