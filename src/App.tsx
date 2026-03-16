import "./App.css";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <main>
        <article className="profile">
          <header className="profile__header">
            <img
              className="profile__image"
              src="/assets/images/avatar-jessica.jpeg"
              alt="Jessica Randall"
            />
            <div className="profile__personal">
              <h1>Jessica Randall</h1>
              <p>London, United Kingdom</p>
            </div>
            <div className="profile__about">
              <p>"Front-end developer and avid reader."</p>
            </div>
          </header>
          <nav className="profile__links">
            <ul>
              <li>
                <a href="#" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer">
                  Frontend Mentor
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer">
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
    </>
  );
}

export default App;
