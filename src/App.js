import { Provider } from 'react-redux';

import store from './store/store';
import Form from './Form';
import List from './List';

import './style.css';

function App() {

  const subject = <h3>Lista przeczytanych książek:</h3>

  return (
    <Provider store={store}>
      {subject}
      <Form />
      <List />
    </Provider>
  );
}

export default App;
