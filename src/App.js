import React, { useState } from "react";
import { Navbar, Team, Footer } from "./components";
import { A, H, E, F, C, Lth, Congo } from "./page";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    window.localStorage.setItem("loggedIn", "true");
  };
  return (
    <div style={{ background: "#1b151f" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<H />} />
          <Route path="/About" element={<A />} />
          <Route path="/Event" element={<E />} />
          <Route path="/Teams" element={<Team />} />
          <Route path="/Con" element={<C />} />
          <Route path="/Fut" element={<F />} />
          <Route
            exact
            path="/login"
            element={<Lth handleLogin={handleLogin} />}
          />
          <Route
            path="/congo"
            element={loggedIn ? <Congo /> : <Lth handleLogin={handleLogin} />}
          />
          <Route
            path="/treasurehunt"
            element={<Lth handleLogin={handleLogin} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
