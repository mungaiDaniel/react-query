import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import SuperHeroes from './components/SuperHeroes'
import RQSuperherous from './components/RQSuperherous'
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/super-heroes' element={<SuperHeroes/>} />
        </Routes>
          <Routes>
          <Route path='/rq-super-heroes' element={<RQSuperherous/>} />
        </Routes>
          <Routes>
          <Route exact path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
