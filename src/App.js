import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { BannerMiddle } from "./components/BannerMiddle/BannerMiddle";
import { Cards } from "./components/Cards/Cards";
import Carousel from "./components/CarouselCards/CarouselCards";

function App() {
  return (
    <>
      <div className="container__banner-top">
        <div className="container">
          <Banner/>
        </div>
      </div>
      <div className="container">
        <Cards/>
      </div>
      <div className="container__banner-middle">
        <div className="container">
          <BannerMiddle/>
        </div>
      </div>
      <div className="container">
        <Carousel />
      </div>
    </>
  );
}

export default App;
