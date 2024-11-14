import './Product.css'
import bookImg from './imgs/book.jpg'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

type ProductProps = {
    img: string;
    title: string;
    author: string;
    price: number; 
    isLoading: boolean;
};

const Product: React.FC<ProductProps> = ({img, title, author, price, isLoading}) => {
  return (
        <div className='productTemplate'>
            <div className='productImg'>
                {isLoading ? ( <Skeleton height={310} width={285} /> ) : ( <img src={img || bookImg} alt="book-img" /> )}
            </div>
            <div className='productProperties'>
                <h1>{isLoading ? <Skeleton height={30} width={260} /> : title}</h1>
                <h2>{isLoading ? <Skeleton height={15} width={130} /> : author}</h2>
                <p>{isLoading ? <Skeleton height={10} width={60} /> : 'R$' + price}</p>
            </div>
            <div className='details'>
                <button className='seeDetails'> See Details </button>
            </div>
        </div>
  )
}

export default Product