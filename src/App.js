import Home from './pages/Home.js'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UserInfo from './pages/UserInfo.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
