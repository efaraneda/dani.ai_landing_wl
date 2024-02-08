import Header from "../../components/Relationship-Counselor/Header";
import Hero from "../../components/Relationship-Counselor/Hero";
import Mid from "../../components/Relationship-Counselor/Mid";
import Links from "../../components/Relationship-Counselor/Links";
import SaberMas from "../../components/Relationship-Counselor/SaberMas";
import WidgetComponent from "../../components/Relationship-Counselor/ComoFunciona";
import Equipo from "../../components/Relationship-Counselor/Equipo";
import MidPayment from "../../components/Relationship-Counselor/MidPayment";


function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Mid />
      <WidgetComponent />
      <MidPayment />
      <Equipo />
      <SaberMas />
      <Links />
    </div>
    
  )
}

export default Home
