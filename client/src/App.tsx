import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Picks from './pages/Picks'
import Standings from './pages/Standings'
import Nav from './components/Nav'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/picks" element={<Picks />} />
         <Route path="/standings" element={<Standings />} />
      </Routes>
    </>
  )
}