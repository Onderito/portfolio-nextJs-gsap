import HeroSection from "./section/hero-section";
import WhoIAm from "./section/who-i-am";

export default function Home() {
  return (
    <div>
      <div className="container">
        <HeroSection />
      </div>
      <div className="container">
        <WhoIAm />
      </div>
    </div>
  );
}
