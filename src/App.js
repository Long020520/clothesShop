import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
// import Dress from './components/Dress/Dress';
// import Home from './components/Home/Home';

const DefaultLayout = React.lazy(() => import('../src/components/DefauLayout/DefaultLayout'))

const loading = () =>
  <div>Loding....</div>

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login: true
    }
  }

  render() {
    window.this = this
    let { t } = this.props
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route name='Home' path="/" render={(props) => <DefaultLayout t={t}  {...props} />} />
              {/* <Route path="/dress" component={Dress} />
              <Route path="/home" component={Home} /> */}
            </Switch>
          </React.Suspense>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
