import './AboutPage.css';

const AboutPage = () => {

  return (
    <div className="about-container">
      <header className="aboutpage-header">
        <h1>About us</h1>
        <p>
        Welcome to our online bookstore! We are passionate about bringing the best literature to your fingertips.</p>
        <p>Explore a vast collection of books, discover your next favorite read, and immerse yourself in the world of stories.</p>
      </header>
      <section className="aboutpage-content">
        <div className="highlight">
          <h2>Top Picks</h2>
          <p>Our mission is to make reading accessible to everyone while supporting authors and promoting a love for books.</p>
        </div>
        </section>
    </div>
  );
};

export default AboutPage;
