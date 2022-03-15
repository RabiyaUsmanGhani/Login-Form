// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/Login';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
     <Provider store={store}>

      <LoginForm />
     </Provider>
     
    </div>
  );
}

export default App;
