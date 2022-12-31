import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home/Home";

import HeroImageMobile from "./assets/images/image-hero-mobile.jpg";
import HeroImageDesktop from "./assets/images/image-hero-desktop.jpg";

function App() {
  return (
    <div
      className={` bg-[url("./assets/images/image-hero-mobile.jpg")] bg-[#fafafa] md:bg-[url("./assets/images/image-hero-desktop.jpg")] bg-no-repeat bg-contain`}
    >
      <Header />
      <Home />
    </div>
  );
}

export default App;
