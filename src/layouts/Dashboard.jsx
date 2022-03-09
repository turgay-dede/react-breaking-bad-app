import React from "react";
import { Route, Routes } from "react-router-dom";
import CharacterDetail from "../pages/CharacterDetail";
import Home from "../pages/Home";
import QuoteDetail from "../pages/QuoteDetail";
import Quotes from "../pages/Quotes";

function Dashboard() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/characters" element={<Home />} />
      <Route path="/character/:char_id" element={<CharacterDetail />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/quote/:quote_id" element={<QuoteDetail />} />
    </Routes>
  );
}

export default Dashboard;
