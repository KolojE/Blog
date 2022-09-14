import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Post from './Pages/Post';
import AboutMe from './Pages/AboutMe'

function App() {
  return (
  <div className='dark min-h-screen font-roboto dark:bg-zinc-900'>
    <Router>
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route exact path="/Post/:id"  element={<Post/>}/>
         <Route path="/About" element={<AboutMe/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
