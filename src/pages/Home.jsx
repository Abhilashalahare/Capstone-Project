import Footer from "../components/Footer";
import GenreMovieList from "../components/GenreMovieList";
import Header from "../components/Header";
import ProductionHouse from "../components/ProductionHouse";
import Slider from "../components/Slider";



function Home() {
  return (
    <div>
      <Header/>
      <Slider />
      <ProductionHouse />
      <GenreMovieList/>
      <Footer/>
    </div>
  );
}

export default Home;