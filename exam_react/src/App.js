import logo from './logo.svg';
import './App.css';
import {Router, Link} from "@reach/router";
import Create from './components/Create'
import ShowAll from './components/ShowAll'
import ShowOne from './components/ShowOne'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">

    <p><Link to="/pets/new">Add a New Pet</Link></p>
      <p><Link to="/">Home</Link></p>

    <Router>
    <ShowAll path="/"/>
    <Create path="/pets/new"/>
    <ShowOne path="/pets/:id"/>
    <Edit path="/pets/update/:id"/>
    </Router>
    </div>
  );
}

export default App;
