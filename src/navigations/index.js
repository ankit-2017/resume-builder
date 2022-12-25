/* eslint-disable react/jsx-props-no-spreading */
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLoader from 'components/common/Loader';
import routes from './routes';

const PageNotFound = lazy(() => import('components/common/Page404'));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {
            routes?.map((route) => (
              <Route key={route.name} {...route.routeProps} />
            ))
          }

          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
