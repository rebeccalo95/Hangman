//Main App component
import './App.css';
import Header from './components/Header';
import Hangman from './components/Hangman';

function App() {
  return (
    <div className="App">
      {/* Instance of Header and Hangment component initialised*/}
      <Header />
      <br></br>
      <Hangman />
    </div>
  );
}

export default App;
