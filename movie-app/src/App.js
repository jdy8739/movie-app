import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './routes/Home.js';
import Detail from './routes/Detail';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <Provider store={ store }>
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* url이 단순할수록 아래로 */}
      </Provider>
    </Router>
  );
}

export default App;
