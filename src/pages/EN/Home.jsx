import Header from "../../components/Home/EN/Header";
import Hero from "../../components/Home/EN/Hero";
import Footer from "../../components/Home/EN/Footer";
import Mid from "../../components/Home/EN/Mid";
import Links from "../../components/Home/EN/Links";
import SaberMas from "../../components/Home/EN/SaberMas";
import WidgetComponent from "../../components/Home/EN/ComoFunciona";
import Widget from "../../components/Home/EN/Modal"



function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Widget />
      <Mid />
      <WidgetComponent />
      <SaberMas />
      <Links />
      <Footer />
    </div>
    
  )
}

export default Home
