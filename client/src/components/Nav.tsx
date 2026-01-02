import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="bg-black text-white py-6 px-4 shadow-xl border-b-2 border-green-700/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-3xl font-bold hover:text-white transition">
          OneAndDone
        </Link>

        <div className="flex gap-12 items-center">
          <Link to="/" className="text-white hover:opacity-80 transition font-medium text-lg">Home</Link>
          <Link to="/standings" className="text-white hover:opacity-80 transition font-medium text-lg">Standings</Link>
          <Link to="/picks" className="text-white hover:opacity-80 transition font-medium text-lg">Picks</Link>
        </div>

        <div className="flex gap-6">
          <Link to="/login" className="px-6 py-2 border-2 border-green-700/50 rounded hover:border-green-600 transition font-medium text-white">
            Login
          </Link>
          <Link to="/signup" className="px-6 py-2 border-2 border-green-700/50 rounded hover:bg-green-700/30 transition font-medium text-white">
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  )
}