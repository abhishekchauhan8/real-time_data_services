// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import LOB from "./components/LOB";
// import Header from "./components/Header";
// import Overview from "./components/Overview";
// import WhyUs from "./components/AboutPIServices";
// import Skills from "./components/Skills";
// import Dashboard from "./components/Dashboard";
// import AboutPIServices from "./components/AboutPIServices";
// import AboutPIServices_Framework from "./components/AboutPIServices_Framework";
// import AboutPIServices_Journey from "./components/AboutPIServices_Journey";
// import AboutPIServices_Why from "./components/AboutPIServices_Why";
// import Footer from "./Footer";
// import Contact from "./Contact";
// import FAQs from "./components/FAQs";
// import Pricing from "./components/Pricing";
// import Team from "./components/Team";
// import Services from "./components/Services";
// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Turbine from "./components/Turbine";

// function App() {
//   return (
//     <React.Fragment>
//       <div className="App">
//         <Header />
//         <Dashboard />
//         <main id="main">
//           <Overview />
//           <AboutPIServices />
//           <AboutPIServices_Why />
//           <AboutPIServices_Framework />
//           <AboutPIServices_Journey />
//           <Services />
//           <Pricing />
//           <Team />
//           {/* <FAQs /> */}
//           <Contact />
//         </main>

//         <Footer />

//         <div id="preloader"></div>
//         <a
//           href="#"
//           class="back-to-top d-flex align-items-center justify-content-center"
//         >
//           <i class="bi bi-arrow-up-short"></i>
//         </a>
//       </div>
//       <Routes>
//         <Route path="/dashboard" exact element={<Turbine />} />
//         <Route path="/turbines" exact element={<Dashboard />} />
//         {/* <Route path="/" exact element={<Navigate to="login" />} />
//         <Route element={<Navigate to="not-found" />} /> */}
//       </Routes>
//     </React.Fragment>
//   );
// }

// export default App;

import Header from "./components/Header";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ServicesMain from "./components/ServicesMain";
import AboutPI from "./components/AboutPI";
import Catalyst from "./components/lob/Catalyst";
import Downstream from "./components/lob/Downstream";
import EnergyAndRenewables from "./components/lob/EnergyAndRenewables";
import Hydrogen from "./components/lob/Hydrogen";
import PowerGeneration from "./components/lob/PowerGeneration";
import RealEstate from "./components/lob/RealEstate";
import Retail from "./components/lob/Retail";
import TradingAndSupply from "./components/lob/TradingAndSupply";
import UpstreamAndIG from "./components/lob/UpstreamAndIG";
import Wind from "./components/lob/Wind";

import CEMIS from "./components/use_cases/CEMIS";
import ProductionOptimization from "./components/use_cases/ProductionOptimization";
import AdvanceSurveillance from "./components/use_cases/AdvanceSurveillance";
import AssetPerformance from "./components/use_cases/AssetPerformance";
import ConditionBasedMaintenance from "./components/use_cases/ConditionBasedMaintenance";
import EnergyManagement from "./components/use_cases/EnergyManagement";
import HydrogenRefuelStation from "./components/use_cases/HydrogenRefuelStation";
import OffshoreWindpark from "./components/use_cases/OffshoreWindpark";
import RemoteMonitoring from "./components/use_cases/RemoteMonitoring";
import TEBA from "./components/use_cases/TEBA";
import TEGA from "./components/use_cases/TEGA";
import Windtopia from "./components/use_cases/Windtopia";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/piservices" exact element={<ServicesMain />} />

        <Route path="/catalyst" exact element={<Catalyst />} />
        <Route path="/downstream" exact element={<Downstream />} />
        <Route
          path="/energyrenewables"
          exact
          element={<EnergyAndRenewables />}
        />
        <Route path="/hydrogen" exact element={<Hydrogen />} />
        <Route path="/powergeneration" exact element={<PowerGeneration />} />
        <Route path="/realstate" exact element={<RealEstate />} />
        <Route path="/retail" exact element={<Retail />} />
        <Route path="/tradingsupply" exact element={<TradingAndSupply />} />
        <Route path="/upstreamandig" exact element={<UpstreamAndIG />} />
        <Route path="/wind" exact element={<Wind />} />

        <Route path="/cemis" exact element={<CEMIS />} />
        <Route
          path="/productionoptimization"
          exact
          element={<ProductionOptimization />}
        />
        <Route
          path="/advancesurveillance"
          exact
          element={<AdvanceSurveillance />}
        />
        <Route path="/assetperformance" exact element={<AssetPerformance />} />
        <Route
          path="/conditionbasedmaintenance"
          exact
          element={<ConditionBasedMaintenance />}
        />
        <Route path="/energymanagement" exact element={<EnergyManagement />} />
        <Route
          path="/hydrogensefuelstation"
          exact
          element={<HydrogenRefuelStation />}
        />
        <Route path="/offshorewindpark" exact element={<OffshoreWindpark />} />
        <Route path="/remotemonitoring" exact element={<RemoteMonitoring />} />
        <Route path="/teba" exact element={<TEBA />} />
        <Route path="/tega" exact element={<TEGA />} />
        <Route path="/windtopia" exact element={<Windtopia />} />

        {/* <Route path="/" exact element={<Navigate to="piservices" />} /> */}
        <Route element={<Navigate to="not-found" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
