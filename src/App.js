import './App.css';
import Landing from './component/landing/landing';
import Navbar from './component/navbar/navbar'
import { createStore } from 'redux';
import reducer from './reducer/index.js';
import { Provider } from 'react-redux';

const store = createStore(reducer)

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Landing />
      </Provider>
    </>
  );
}

export default App;
