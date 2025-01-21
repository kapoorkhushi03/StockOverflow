
import './App.css';
import Home from './pages/Home';
import Login from '.pages/Login';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
