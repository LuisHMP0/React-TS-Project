import Product from '../Product/Product';
import './Products.css';
import { useEffect, useState } from 'react';

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
};

const Products = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 16;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/fiction.json?limit=80'); // Carregando 80 livros
        const data = await response.json();

        const bookData = data.works.map((book: any) => ({
          id: book.key.split('/').pop(),
          title: book.title,
          author: book.authors && book.authors.length > 0 ? book.authors[0].name : 'Autor desconhecido',
          price: Math.floor(Math.random() * 100),
          coverImage: book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
            : 'https://via.placeholder.com/150?text=No+Image',
        }));

        setBooks(bookData);
        setDisplayedBooks(bookData.slice(0, booksPerPage)); 
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
  
    if (startIndex < books.length) {
      setDisplayedBooks(books.slice(startIndex, endIndex));
      setCurrentPage(nextPage);
  
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePreviousPage = () => {
    const prevPage = currentPage - 1;
    const startIndex = (prevPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
  
    if (prevPage > 0) {
      setDisplayedBooks(books.slice(startIndex, endIndex));
      setCurrentPage(prevPage);
  
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  

  const sortBooks = (order: 'asc' | 'desc') => {
    const sortedBooks = [...books].sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    setBooks(sortedBooks); 
    setDisplayedBooks(sortedBooks.slice(0, booksPerPage)); 
    setCurrentPage(1); 
  };

  return (
    <>
      <section className="filters">
        <button onClick={() => sortBooks('asc')}>Alphabetical Order (A-Z)</button>
        <button onClick={() => sortBooks('desc')}>Alphabetical Order (Z-A)</button>
      </section>
      <section className="products">
        {isLoading
          ? Array.from({ length: booksPerPage }).map((_, index) => (
              <Product key={index} id={index.toString()} img="" title="" author="" price={0} isLoading={true} />
            ))
          : displayedBooks.map((book, index) => (
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
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage * booksPerPage >= books.length}>
          Next
        </button>
      </div>
    </>
  );
};

export default Products;
