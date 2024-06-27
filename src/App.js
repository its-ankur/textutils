import logo from './logo.svg';
import './App.css';

let name = "Ankur";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src={logo} alt="logo" />
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
        </p>
        </div>
    </>
  );
}

export default App;
