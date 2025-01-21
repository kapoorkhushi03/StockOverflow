import './App.css';
import Home from './pages/Home';
import{
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

