import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import NavBar from "./NavBar";

type ratesType = {
  [key: string]: number;
};

function App() {
  const [rates, setRates] = useState<ratesType>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("https://api.exchangerate.host/latest").then((response) => {
      setRates(response.data.rates);
      setLoading(false);
    });
  }, []);
  return (
    <Router>
      <div className="d-flex justify-content-center">
        <div className="w-50 app">
          <div className="mb-2 text-center d-flex justify-content-center">
            <h1>MyConverter</h1>
          </div>
          <div className="mb-2">
            <NavBar loading={loading} rates={rates} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
