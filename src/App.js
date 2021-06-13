import { Provider } from 'react-redux';

import store from './store/store';
import Form from './Form';
import List from './store/List';

import './style.css';

function App() {
  return (
    <Provider store={store}>
      <h3>Redux</h3>
      <Form />
      <List />
    </Provider>
  );
}

export default App;
