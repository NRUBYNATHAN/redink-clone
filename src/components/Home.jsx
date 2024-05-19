import Navbar from "./Navbar";
import Banner from "./Banner";
import Customers from "./Customers";
import Award from "./Award";
import Scroll from "./Scroll";
import About from "./About";
import Solutions from "./Solutions";
import Count from "./Count";
import Trust from "./Trust";
import Banner2 from "./Banner2";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-[80px]">
        <Banner />
        <Customers />
        <Award />
        <Scroll />
        <About />
        <Solutions />
        <Count />
        <Trust />
        <Banner2 />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
