import Header from "../../components/Consejero/Header";
import Hero from "../../components/Consejero/Hero";
import Mid from "../../components/Consejero/Mid";
import Links from "../../components/Consejero/Links";
import SaberMas from "../../components/Consejero/SaberMas";
import WidgetComponent from "../../components/Consejero/ComoFunciona";
import Equipo from "../../components/Consejero/Equipo";
import Payment from "../../components/Consejero/MidPayment";

function Home() {
  

  return (
    <div>
      <Header />
      <Hero />
      <Mid />
      <WidgetComponent />
      <Payment />
      <Equipo />
      <SaberMas />
      <Links />
    </div>
    
  )
}

export default Home
