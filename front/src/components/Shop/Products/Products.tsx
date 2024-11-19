import Product from '../Product/Product'
import './Products.css'
import { useEffect, useState } from 'react'

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
};

const Products = () => {
  const [books, setBooks] = useState<Book[]>([]); // Livros a serem exibidos
  const [allBooks, setAllBooks] = useState<Book[]>([]); // Armazenando todas as páginas de livros carregadas
  const [isLoading, setIsLoading] = useState(true);
  const [currentBlock, setCurrentBlock] = useState(1); // Bloco atual de 5 páginas
  const booksPerPage = 16;
  const pagesPerBlock = 1; // Cada bloco de 5 páginas
  const totalPages = 100; // Defina um número total de páginas (exemplo para simular)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const offset = (currentBlock - 1) * booksPerPage * pagesPerBlock; // Calcula o deslocamento para carregar o bloco de 5 páginas
        const response = await fetch(`https://openlibrary.org/subjects/fiction.json?limit=${booksPerPage * pagesPerBlock}&offset=${offset}`);
        const data = await response.json();

        const bookData = data.works.map((book: any) => ({
          id: book.key.split('/').pop(),
          title: book.title,
          author: book.authors && book.authors.length > 0 ? book.authors[0].name : 'Autor desconhecido',
          price: Math.floor(Math.random() * 100),
          coverImage: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : ''
        }));

        
        setAllBooks(prevBooks => [...prevBooks, ...bookData]);

        
        setBooks(bookData);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [currentBlock]); 

  
  const goToNextBlock = () => {
    if ((currentBlock * pagesPerBlock) < totalPages) {
      setCurrentBlock(prevBlock => prevBlock + 1);
    }
  };

  
  const goToPreviousBlock = () => {
    if (currentBlock > 1) {
      setCurrentBlock(prevBlock => prevBlock - 1);
    }
  };

  return (
    <>
      <section className='filters'></section>
      <section className='products'>
        {isLoading
          ? Array.from({ length: booksPerPage }).map((_, index) => (
              <Product
                key={index}
                id={index.toString()}
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
                id={book.id}
                img={book.coverImage}
                title={book.title}
                author={book.author}
                price={book.price}
                isLoading={false}
              />
            ))}
      </section>

      {/* Paginação */}
      <div className="pagination">
        <button onClick={goToPreviousBlock} disabled={currentBlock === 1}>
          Previous
        </button>
        <button onClick={goToNextBlock} disabled={currentBlock * pagesPerBlock >= totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default Products;
