import './UniqueProduct.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

type Product = {
  title: string;
  price: number;
  description: string;
  author: string;
  img: string;
};

const UniqueProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();

        const coverId = data.covers?.[0];
        const imgUrl = coverId 
          ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
          : 'https://via.placeholder.com/150?text=No+Image';

        let authorName = 'Unknown author';
        if (data.authors?.[0]?.author?.key) {
          const authorResponse = await fetch(`https://openlibrary.org${data.authors[0].author.key}.json`);
          const authorData = await authorResponse.json();
          authorName = authorData.name || 'Unknown author';
        }

        setProduct({
          title: data.title || 'Title not available',
          author: authorName,
          description: typeof data.description === 'string' ? data.description : 'No description',
          price: Math.floor(Math.random() * 100),
          img: imgUrl,
        });
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <ClipLoader size={50} />
      </div>
    );
  }

  if (!product) return <p>Product not found</p>;

  return (
    <section>
      <div className="productName">
        <p className="home"> Home <span> {'>'} </span> </p>
        <p className="shop"> Shop <span> {'>'} </span> </p>
        <p className="title">{product?.title}</p>
      </div>
      <div className="uniqueProductTemplate">
        <div className="imgsUniqueProduct">
          <img className="imgUniqueProduct" src={product?.img} alt="productImg" />
        </div>
        <div className="uniqueProductDetails">
          <h1>{product?.title}</h1>
          <p className="priceUniqueProduct">R$ {product?.price}</p>
          <p className="authorUniqueProduct">{product?.author}</p>
          <p className="descriptionUniqueProduct">{product?.description}</p>
          <button className="buyProduct">Buy Book</button>
        </div>
      </div>
    </section>
  );
};

export default UniqueProduct;
