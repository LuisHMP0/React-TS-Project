import './HomePage.css';



const HomePage = () => {
  
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Your Online Bookstore</h1>
        <p>Explore a wide range of books and find your next great read!</p>
      </header>
      <section className="homepage-content">
        <div className="highlight">
          <h2>Top Picks</h2>
          <p>Discover our most popular books handpicked for you.</p>
        </div>
        <div className="highlight">
          <h2>About Us</h2>
          <p>Learn more about our mission to bring stories to life.</p>
        </div>
        <div className="highlight">
          <h2>Contact Us</h2>
          <p>Have any questions? Reach out to our friendly team.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
