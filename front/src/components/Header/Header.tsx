import './Header.css'
import BooksLogo from './imgs/pilha-de-livros.png'
 
const Header = () => {
  return (
    <header>
      <ul> 
        <li><a href='' className='books-h1'> <img src={BooksLogo} alt="BooksLogo" /> Books</a></li>
        <li><a href='' className='home-h2'>Home</a></li>
        <li><a href='' className='about-h2'>About</a></li>
        <li><a href='' className='contact-h2'>Contact</a></li>
        <li><a href="" className='shop-h2'>Shop</a></li>
      </ul>
    </header>
  )
}


export default Header