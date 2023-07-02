import About from '../../components/home/About'

import './home.css'
import Hero from '../../components/home/Hero'
import HowToRecycla from '../../components/home/HowToRecycla'

function Home() {
  return (
    <>
      <Hero />
       <main>
        <About />
        <HowToRecycla/>
      </main>
    </>
  )
}

export default Home
