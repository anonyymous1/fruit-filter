import './App.css';
import FruitContainer from './components/FruitContainer'

function App() {
  const fruits = ["banana","watermelon","apple","orange", "crab apple", "grape", "grapefruit", "mango", "mangosteen", "kiwi", "starfruit"];
  return (
    <div className="App">
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
