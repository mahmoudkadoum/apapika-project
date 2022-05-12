import './App.css';
import LandingPage from './components/LandingPage';
import { Navigate, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/redirect" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
