import { Provider } from 'react-redux';

import store from './store/store';
import Form from './Form';
import List from './List';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const subject = <h1 style={{textAlign: 'center'}} className="mt-3">Lista przeczytanych książek:</h1>

  return (
    <Provider store={store}>
      {subject}
      <Form />
      <List />
    </Provider>
  );
}

export default App;
