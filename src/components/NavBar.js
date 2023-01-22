import { Link } from "react-router-dom";

function NavBar() {
  var address = "real-time_data_services";

  return (
    <nav id="navbar" class="navbar">
      <ul>
        <li>
          <a class="nav-link scrollto active" href="#hero">
            Home
          </a>
        </li>

        {/* <li>
          <a class="nav-link scrollto" href="#about">
            Overview
          </a>
        </li> */}

        <li class="dropdown">
          <a href="">
            <span>Overview</span> <i class="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a href="#about">What is PI</a>
            </li>
            <li class="dropdown">
              <a href="#why-us">
                <span>What is Real Time Data Services</span>{" "}
              </a>
            </li>
            <li>
              <a href="#skills">Real Time Data Services Framework</a>
            </li>
            <li>
              <a href="#journey">Real Time Data Services Journey</a>
            </li>
          </ul>
        </li>

        <li>
          <a class="nav-link scrollto" href="#services">
            Services
          </a>
        </li>

        {/* <li>
          <a class="nav-link scrollto" href="#portfolio">
            Portfolio
          </a>
        </li> */}

        <li class="dropdown">
          <a href="#">
            <span>Line of Business</span> <i class="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li class="dropdown">
              <Link to="/catalyst">Catalyst</Link>
            </li>
            <li>
              <Link to="/downstream">Downstream</Link>
            </li>
            <li>
              <Link to="/energyrenewables">Energy & Renewables</Link>
            </li>
            <li>
              <Link to="/hydrogen">Hydrogen</Link>
            </li>
            <li>
              <Link to="/powergeneration">Power Generation</Link>
            </li>
            <li class="dropdown">
              <Link to="/upstreamandig">Upstream and IG</Link>
            </li>
            <li>
              <Link to="/realstate">Real State</Link>
            </li>
            <li>
              <Link to="/retail">Retail</Link>
            </li>
            <li>
              <Link to="/tradingsupply">Trading & Supply</Link>
            </li>
            <li>
              <Link to="/wind">Wind</Link>
            </li>
          </ul>
        </li>

        <li class="dropdown">
          <Link href="#">
            <span>Use Cases</span> <i class="bi bi-chevron-down"></i>
          </Link>
          <ul>
            <li>
              <Link to="/cemis">CO2 Emission Management</Link>
            </li>

            <li class="dropdown">
              <Link to="/productionoptimization">Production Optimization</Link>
            </li>
            <li class="dropdown">
              <Link to="/advancesurveillance">Advance Surveillance</Link>
            </li>
            <li>
              <Link to="/assetperformance">Asset Performance</Link>
            </li>
            <li>
              <Link to="/conditionbasedmaintenance">
                Condition Based Maintenance
              </Link>
            </li>
            <li>
              <Link to="/energymanagement">Energy Management</Link>
            </li>
            <li>
              <Link to="/hydrogensefuelstation">Hydrogen Refuel Station</Link>
            </li>
            <li>
              <Link to="/offshorewindpark">Offshore Windpark</Link>
            </li>
            <li>
              <Link to="/remotemonitoring">Remote Monitoring</Link>
            </li>
            <li>
              <Link to="/teba">TEBA - Top Energy Bad Actors</Link>
            </li>
            <li>
              <Link to="/tega">TEGA - Top Energy Goood Actors</Link>
            </li>
            <li>
              <Link to="/windtopia">Windtopia</Link>
            </li>
          </ul>
        </li>

        {/* <li>
          <a class="nav-link scrollto" href="piservices#pricing">
            Pricing
          </a>
        </li> */}

        <li>
          <a class="nav-link scrollto" href="#team">
            Team
          </a>
        </li>

        <li>
          <a class="nav-link scrollto" href="#contact">
            Contact
          </a>
        </li>

        {/* <li>
          <a class="getstarted scrollto" href="#about">
            Get Started
          </a>
        </li> */}
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}

export default NavBar;
