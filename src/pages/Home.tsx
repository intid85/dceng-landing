import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import Quality from '../sections/Quality'
import Clients from '../sections/Clients'
import Gallery from '../sections/Gallery'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Clients />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
