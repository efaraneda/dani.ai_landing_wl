import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import Mid from "../../components/Home/Mid";
import Links from "../../components/Home/Links";
import SaberMas from "../../components/Home/SaberMas";
import WidgetComponent from "../../components/Home/ComoFunciona";
import Equipo from "../../components/Home/Equipo";


function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Mid />
      <WidgetComponent />
      <Equipo />
      <SaberMas />
      <Links />
    </div>
    
  )
}

export default Home
