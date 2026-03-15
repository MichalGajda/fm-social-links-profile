import "./App.css";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <main>
        <article className="profile">
          <header className="profile__header">
            <div className="profile__image">
              <img
                src="/assets/images/avatar-jessica.jpeg"
                alt="Jessica Randall"
              />
            </div>
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
                <a href="#" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">Frontend Mentor</a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">Instagram</a>
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
