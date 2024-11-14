import './Product.css'
import bookImg from './imgs/book.jpg'

type ProductProps = {
    img: string;
    title: string;
    author: string;
    price: number; 
};

const Product: React.FC<ProductProps> = ({img, title, author, price}) => {
  return (
        <div className='productTemplate'>
            <div className='productImg'>
                <img src={img || bookImg} alt="book-img" />
            </div>
            <div className='productProperties'>
                <h1> {title || 'title-undefined'} </h1>
                <h2> {author || 'author-undefined'} </h2>
                <p> {'R$' + price || 'price-undefined'} </p>
            </div>
            <div className='details'>
                <button className='seeDetails'> See Details </button>
            </div>
        </div>
  )
}

export default Product