import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-main">
          <img className="navbar-logo" src="makahco.png" alt="makahco" />
        </div>
      </div>
      <div className="hero">
        <h1 className="hero-title">Makahco</h1>
      </div>
      <div className="about">
        <div className="about-content">
          <p>
            Welcome to <b>Makahco!</b> We are a team of talented professionals
            who are passionate about helping our clients bring their creative
            visions to life. Our services include software engineering, music
            recording, and video production
          </p>
          <p>
            Whether you need a{" "}
            <b>
              custom software solution, high-quality audio recording, or
              professional video production,
            </b>{" "}
            we have the skills and experience to help you go bananas over your
            project.
          </p>
          <p>
            So don't monkey around, get in touch with us today and let's
            ape-peal to your creative side!
          </p>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer">
          <p className="footer-content">
            developed by{" "}
            <a href="https://makahco.com" className="footer-link">
              makahco ®
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
