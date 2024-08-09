import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={Create} />
        <Route path="/blogs/:id" exact component={BlogDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
