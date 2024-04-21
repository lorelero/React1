import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Mycard from './components/Mycard'
import Tags from './components/Tags'
import Bobtail from './assets/bobtail.jpg'
import Golden from './assets/golden.jpg'
import Dalmata from './assets/dalmata.jpg'
import Salchicha from './assets/salchicha.jpg'

function App() {
  return (
    <>
    <Header/>
    <div className='container_card'>
    <Mycard
            image={Bobtail}
            name="Capataz"
            description="lleno de energia y listo para jugar.¡Dale a Capataz los paseos que necesita!"
            text="bobtail"
            color="success"
    />
        <Mycard
            image={Golden}
            name="Rey"
            description="Es jugueton, amigable y se lleva bien con niños y otros animales ¡Haz de Rey parte de tu familia hoy mismo!"
            text="Golden"
            color="primary"
    />
        <Mycard
            image={Dalmata}
            name="Flo"
            description="Una perrita de gran energia y muy cuidadora de su familia!"
            text="Dalmata"
            color="danger"
    />
        <Mycard
            image={Salchicha}
            name="Mika"
            description="Es una compañera ideal para estar dentro de la casa y regalonear!"
            text="Salchicha"
            color="warning"
    />
    </div>
    <Tags/>
    <Footer/>
    </>
  )
}

export default App