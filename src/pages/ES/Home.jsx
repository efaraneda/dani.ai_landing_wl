import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import Footer from "../../components/Footer";
import Mid from "../../components/Home/Mid";
import Links from "../../components/Home/Links";
import SaberMas from "../../components/Home/SaberMas";
import WidgetComponent from "../../components/Home/ComoFunciona";



function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Mid />
      <WidgetComponent />
      <SaberMas />
      <Links />
      <Footer />
    </div>
    
  )
}

export default Home
