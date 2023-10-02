import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import VideoMid from "../components/Home/VideoMid";
import Ideal from "../components/Home/Ideal";
import Links from "../components/Home/Links";
import SaberMas from "../components/Home/SaberMas";
import WidgetComponent from "../components/Home/ComoFunciona";



function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Ideal />
      <WidgetComponent />
      <VideoMid />
      <SaberMas />
      <Links />
      <Footer />
    </div>
    
  )
}

export default Home
