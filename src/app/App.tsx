import heroImage from "../assets/photo-1488521787991-ed7bbaae773c.jpg";

export default function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <div className="logo">InAmigos Foundation</div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Campaigns</a>
            <a href="#">Contact</a>
          </div>

          <button className="btn">Donate Now</button>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Together We Can Change Lives</h1>

          <p>
            Join us in making a difference by providing education,
            food, and healthcare to communities in need.
          </p>

          <div className="hero-buttons">
            <button className="btn">Donate Now</button>
            <button className="btn">Become Volunteer</button>
          </div>

          <img src={heroImage} alt="Children" />
        </div>
      </section>
    </>
  );
}
