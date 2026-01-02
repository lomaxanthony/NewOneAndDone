export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center border-b-4 border-green-700/50">
        <h1 className="text-5xl font-bold mb-4">This Week's Tournament</h1>
        <p className="text-2xl text-green-300 mb-8">PGA Tour - Phoenix Open</p>
        <p className="text-lg text-gray-300 mb-8">Make your one and done pick. Win big.</p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-green-700/70 rounded-lg hover:bg-green-700 transition font-bold text-lg">
            Make My Pick
          </button>
          <button className="px-8 py-3 border-4 border-green-700/50 rounded-lg hover:border-green-600 transition font-bold text-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
          <div className="border-2 border-green-700/50 p-6 rounded-lg">
            <h3 className="text-green-300 text-lg font-bold mb-2">Dates</h3>
            <p className="text-xl">Jan 29 - Feb 2, 2025</p>
          </div>
          <div className="border-2 border-green-700/50 p-6 rounded-lg">
            <h3 className="text-green-300 text-lg font-bold mb-2">Location</h3>
            <p className="text-xl">Phoenix, Arizona</p>
          </div>
          <div className="border-2 border-green-700/50 p-6 rounded-lg">
            <h3 className="text-green-300 text-lg font-bold mb-2">Prize Pool</h3>
            <p className="text-xl">$20 Million</p>
          </div>
          <div className="border-2 border-green-700/50 p-6 rounded-lg">
            <h3 className="text-green-300 text-lg font-bold mb-2">Top Players</h3>
            <p className="text-xl">Rory, Jon, Ludvig</p>
          </div>
        </div>
      </section>

    </div>
  )
}