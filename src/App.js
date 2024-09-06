import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> 📖 The Dictionary</header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://github.com/gosiagrajewska"
            target="_blank"
            rel="noreferrer"
          >
            Małgorzata Grajewska
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/gosiagrajewska/dictionaryapp-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
