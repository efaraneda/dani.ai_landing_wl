import Header from "../../components/Home_EN/Header";
import Hero from "../../components/Home_EN/Hero";
import Mid from "../../components/Home_EN/Mid";
import Links from "../../components/Home_EN/Links";
import SaberMas from "../../components/Home_EN/SaberMas";
import WidgetComponent from "../../components/Home_EN/ComoFunciona";
import Equipo from "../../components/Home_EN/Equipo";


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
