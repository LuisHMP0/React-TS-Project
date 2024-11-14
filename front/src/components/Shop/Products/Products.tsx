import Product from '../Product/Product'
import './Products.css'
import {useEffect, useState} from 'react'


type Book = {
  title: string;
  author: string; 
  price: number;
  coverImage: string; 
};

const Products = () => {

  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/fiction.json?limit=40');
        const data = await response.json();
        
        const bookData = data.works.map((book: any) => ({
          title: book.title,
          author: book.authors && book.authors.length > 0 ? book.authors[0].name : 'Autor desconhecido',
          price: Math.floor(Math.random() * 100), 
          coverImage: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : ''
        }));
        
        setBooks(bookData);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
    <section className='filters'></section>
    <section className='products'>
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => ( // Exibe 8 skeletons enquanto carrega
            <Product
              key={index}
              img=""
              title=""
              author=""
              price={0}
              isLoading={true}
            />
          ))
        : books.map((book, index) => (
            <Product
              key={index}
              img={book.coverImage}
              title={book.title}
              author={book.author}
              price={book.price}
              isLoading={false}
            />
          ))}
    </section>
    </>
  )
}

export default Products