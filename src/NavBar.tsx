import "./NavBar.css";

import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Calculator from "./Calculator";
import RatesList from "./RatesList";

enum Tabs {
  Calculator = 0,
  Rates = 1,
}

interface INavBar {
  rates: any;
  loading: boolean;
}

const getInitialActiveTab = (pathname: string) => {
  if ("/" === pathname) {
    return Tabs.Calculator;
  }
  return Tabs.Rates;
};

const defaultTabClassName = "nav-item w-50 nav-item-custom";
const activeTabClassName = "nav-item w-50 nav-item-custom active";

function NavBar({ loading, rates }: INavBar) {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(getInitialActiveTab(pathname));

  const calcActive = () => {
    setActiveTab(Tabs.Calculator);
  };
  const ratesActive = () => {
    setActiveTab(Tabs.Rates);
  };

  return (
    <>
      <div className="nav-custom d-flex justify-content-around">
        <Link
          to="/"
          className={
            activeTab === Tabs.Calculator
              ? activeTabClassName
              : defaultTabClassName
          }
          onClick={calcActive}
        >
          Calculator
        </Link>
        <Link
          to="/CurrencyRate"
          className={
            activeTab === Tabs.Rates ? activeTabClassName : defaultTabClassName
          }
          onClick={ratesActive}
        >
          Current rates
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Calculator rates={rates} />} />
        <Route
          path="/CurrencyRate"
          element={<RatesList loading={loading} allRates={rates} />}
        />
      </Routes>
    </>
  );
}
export default NavBar;
