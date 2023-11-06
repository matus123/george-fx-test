import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

function AppContainer() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

export default AppContainer;
