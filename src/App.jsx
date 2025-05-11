import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Diary from './pages/Diary';
import New from './pages/New';
import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary' element={<Diary/>}/>
    </Routes>
  )
}

export default App
