
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar  from './Navbar';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
