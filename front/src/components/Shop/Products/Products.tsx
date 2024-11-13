import Product from '../Product/Product'
import './Products.css'

const Products = () => {
  return (
    <>
    <section className='filters'></section>
    <section className='products'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
    </>
  )
}

export default Products