import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">The Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Malgorzata Grajewska</footer>
      </div>
    </div>
  );
}
