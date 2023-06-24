import About from '../../components/home/About'
import Cases from '../../components/home/Cases'
import Hero from '../../components/home/Hero'
import Solutions from '../../components/home/Solutions'

function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Cases />
        <Solutions />
      </main>
    </>
  )
}

export default Home
