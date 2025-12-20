import HeroSection from "./section/hero-section";
import HowIWork from "./section/how-i-work";
import MyJourney from "./section/my-journey";
import MyProject from "./section/my-project";
import WhoIAm from "./section/who-i-am";
import Footer from "./section/footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <HeroSection />
      </div>
      <div className="container">
        <WhoIAm />
      </div>
      <div className="container">
        <MyProject />
      </div>
      <div className="container">
        <MyJourney />
      </div>
      <div className="container">
        <HowIWork />
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
