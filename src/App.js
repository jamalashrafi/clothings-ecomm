import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/Homepage.components';
import ShopPage from './pages/shop/shop.components';

function App() {
  return (
    <div >
      <Route exact path="/" component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
