import createStore from '@/adapter/redux/store';
import { containerInstance } from '@/di';
import { AuthenticatedProvider } from '@atom/authorization';
import { AtomCommonProvider } from '@atom/common';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';

const App = () => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    containerInstance.configure();

    setStore(createStore());
  }, []);

  if (!store) return null;

  return (
    <AuthenticatedProvider>
      <Provider store={store}>
        <AtomCommonProvider initializeLanguage>
          <Router basename={ROUTES.baseUrl}>
            <Switch>
              <Route
                path={ROUTES.bets}
                render={({ match: { url } }) => (
                  <div>Bet Reports</div>
                )}
              />

              <Redirect to={ROUTES.baseUrl + ROUTES.bets} />
            </Switch>
          </Router>
        </AtomCommonProvider>
      </Provider>
    </AuthenticatedProvider>
  );
};

export default App;
