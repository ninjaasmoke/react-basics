import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
