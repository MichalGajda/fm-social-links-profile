import "./App.css";
import Attribution from "./components/Attribution";

const AVATAR_IMAGE_SRC = `${import.meta.env.BASE_URL}avatar-jessica.jpeg`;

function App() {
  return (
    <div className="container">
      <main>
        <article className="profile">
          <header className="profile__header">
            <img
              className="profile__image"
              src={AVATAR_IMAGE_SRC}
              alt="Jessica Randall"
            />
            <div className="profile__personal">
              <h1>Jessica Randall</h1>
              <p>London, United Kingdom</p>
            </div>
            <div className="profile__about">
              <p><q>Front-end developer and avid reader.</q></p>
            </div>
          </header>
          <nav className="profile__links">
            <ul>
              <li>
                <a href="https://github.com" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.frontendmentor.io" rel="noreferrer">
                  Frontend Mentor
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </main>
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
