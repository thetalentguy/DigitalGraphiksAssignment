import './App.css';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Products / >
    </div>
  );
}

export default App;
