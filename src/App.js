import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/Homepage.components';
import HatsPage from './pages/HatsPage';

function App() {
  return (
    <div >
      <Route exact path="/" component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
