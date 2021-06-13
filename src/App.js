import { Provider } from 'react-redux';

import store from './store/store';
import Form from './Form';

import './style.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
      </div>
    </Provider>
  );
}

export default App;
