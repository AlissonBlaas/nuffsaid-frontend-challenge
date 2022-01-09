import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

import AppProvider from './providers';
import Routes from './routes';

const App = () => (
    <Router>
      <GlobalStyles />
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
);

export default App;
