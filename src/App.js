import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>HIRAF Store</h1>
      <h4>Find Your Favourite Products</h4>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
