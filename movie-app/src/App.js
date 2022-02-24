import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './routes/Home.js';
import Detail from './routes/Detail';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <div className="App">
      <Provider store={ store }>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/detail/:id">
            <Detail/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </Provider>
      {/* url이 단순할수록 아래로 */}
    </div>
  );
}

export default App;
