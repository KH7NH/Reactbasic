import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './TodoApp/ListToDo';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To Do Apps with React
        </p>
        {/* <MyComponent></MyComponent> */}
        <ListToDo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}

    </div>
  );
}


export default App;
