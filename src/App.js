import Routes from 'navigations';
import { Provider } from 'react-redux';
import configureAppStore from 'Store/store';
import { StyledEngineProvider } from '@mui/material/styles';
import './Styles/main.scss';

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <Routes />
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
