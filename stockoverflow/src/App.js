import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'; // Import the Login component
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} /> {/* Add Login route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

