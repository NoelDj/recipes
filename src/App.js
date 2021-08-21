import './App.css';
import Section from './Section'
import Page from './Page'
import Header from './Header.jsx'
import Categories from './Categories';
import Category from './Category';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Section />
        </Route>
        <Route path="/page/:id">
          <Page />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/category/:id">
          <Category />
        </Route>  
        
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
