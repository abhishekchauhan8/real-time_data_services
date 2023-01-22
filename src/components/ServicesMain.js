import Contact from "./Contact";
import Footer from "./Footer";
import AboutPIServices from "./AboutPIServices";
import AboutPIServices_Framework from "./AboutPIServices_Framework";
import AboutPIServices_Journey from "./AboutPIServices_Journey";
import AboutPIServices_Why from "./AboutPIServices_Why";
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import Pricing from "./Pricing";
import Services from "./Services";
import Team from "./Team";

function ServicesMain() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Dashboard />
      <main id="main">
        <Overview />
        <AboutPIServices />
        <AboutPIServices_Why />
        <AboutPIServices_Journey />
        <AboutPIServices_Framework />

        <Services />
        {/* <Pricing /> */}
        <Team />
        {/* <FAQs /> */}
        <Contact />
      </main>

      <Footer />

      <div id="preloader"></div>
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default ServicesMain;
