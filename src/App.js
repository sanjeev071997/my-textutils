import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null); 
  
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }

  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3" >
    <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <TextForm showAlert = {showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
