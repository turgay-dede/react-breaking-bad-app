import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layouts/Navbar'
import Dashboard from './layouts/Dashboard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
