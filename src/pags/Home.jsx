import Navbar from "../components/Navbar"
import Principal from "../components/Principal"

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto min-h-screen py-20 bg-zinc-50">
        <Principal />
      </div>
    </main>
  )
}

export default Home